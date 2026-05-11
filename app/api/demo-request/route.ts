import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const TO = process.env.RESEND_TO_EMAIL ?? 'info@ultrastat.co.uk'
const FROM = 'ULTRASTAT Website <noreply@ultrastat.co.uk>'

function validate(body: Record<string, string>): string | null {
  if (!body.name?.trim()) return 'Name is required'
  if (!body.email?.trim() || !/\S+@\S+\.\S+/.test(body.email)) return 'Valid email required'
  if (!body.phone?.trim()) return 'Phone is required'
  return null
}

function buildHtml(body: Record<string, string>): string {
  const rows = [
    ['Name', body.name],
    ['Company', body.company],
    ['Postcode', body.postcode],
    ['Email', body.email],
    ['Phone', body.phone],
    ['Preferred distributor', body.distributor],
    ['Source', body.utm_source],
    ['Campaign', body.utm_campaign],
    ['Page', body.squeeze_page],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#475569;font-size:14px;">${k}</td><td style="padding:6px 12px;font-weight:600;font-size:14px;">${v}</td></tr>`)
    .join('')

  return `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
      <div style="background:#1A1A2E;padding:20px 24px;">
        <h1 style="color:#fff;font-size:18px;margin:0;">New demo request</h1>
      </div>
      <div style="padding:24px;background:#f8fafc;">
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;">
          ${rows}
        </table>
        <p style="color:#94a3b8;font-size:12px;margin-top:16px;">
          Submitted ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })}
        </p>
      </div>
    </div>
  `
}

export async function POST(request: Request) {
  const body: Record<string, string> = await request.json()

  const err = validate(body)
  if (err) return NextResponse.json({ error: err }, { status: 400 })

  if (!resend) {
    console.warn('RESEND_API_KEY not set — skipping email, returning success for dev.')
    return NextResponse.json({ success: true })
  }

  const subject = body.squeeze_page
    ? `Demo request via /demo/${body.squeeze_page} — ${body.name}`
    : `Demo request — ${body.name} (${body.company ?? 'unknown company'})`

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: body.email,
    subject,
    html: buildHtml(body),
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
