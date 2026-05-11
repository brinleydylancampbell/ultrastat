'use client'

import { useEffect, useRef, useState } from 'react'
import type { Distributor } from '@/lib/distributors'
import 'leaflet/dist/leaflet.css'

interface Props {
  distributors: Distributor[]
  onSelect?: (id: string) => void
}

export default function DistributorMap({ distributors, onSelect }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<Distributor | null>(null)

  useEffect(() => {
    if (!mapRef.current) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let L: any

    const init = async () => {
      L = (await import('leaflet')).default

      map = L.map(mapRef.current, {
        center: [54.0, -2.5],
        zoom: 6,
        scrollWheelZoom: false,
        zoomControl: true,
      })

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 18,
      }).addTo(map)

      const orangeIcon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24C24 5.373 18.627 0 12 0z" fill="#F97316"/>
          <circle cx="12" cy="12" r="5" fill="white"/>
        </svg>`,
        className: '',
        iconSize: [24, 36],
        iconAnchor: [12, 36],
        popupAnchor: [0, -36],
      })

      distributors.forEach((d) => {
        const marker = L.marker([d.lat, d.lng], { icon: orangeIcon }).addTo(map)
        marker.on('click', () => {
          setSelected(d)
          onSelect?.(d.id)
        })
      })
    }

    init()
    return () => { if (map) map.remove() }
  }, [distributors, onSelect])

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="w-full rounded-xl overflow-hidden"
        style={{ height: 400 }}
        aria-label="Distributor locations map"
      />
      {selected && (
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-[1000]">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-slate-900 font-semibold text-sm">{selected.name}</p>
          <p className="text-slate-500 text-xs mt-0.5">{selected.territory}</p>
          {selected.contactUrl && (
            <a
              href={selected.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-xs font-semibold mt-2 inline-block hover:text-orange-600"
            >
              Visit website →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
