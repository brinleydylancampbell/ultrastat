'use client'

import dynamic from 'next/dynamic'
import type { Distributor } from '@/lib/distributors'

const DistributorMap = dynamic(() => import('@/components/DistributorMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-xl bg-[#1A1A2E] flex items-center justify-center" style={{ height: 400 }}>
      <p className="text-white/40 text-sm">Loading map…</p>
    </div>
  ),
})

export default function DistributorMapClient({ distributors }: { distributors: Distributor[] }) {
  return <DistributorMap distributors={distributors} />
}
