"use client"

import { useEffect, useState } from "react"
import { getAdZones, type AdZone } from "@/lib/site-settings"

interface AdZoneProps {
  position: AdZone["position"]
}

export function AdZoneComponent({ position }: AdZoneProps) {
  const [adZone, setAdZone] = useState<AdZone | null>(null)

  useEffect(() => {
    const zones = getAdZones()
    const zone = zones.find((z) => z.position === position && z.enabled)
    setAdZone(zone || null)
  }, [position])

  if (!adZone || !adZone.code) return null

  return <div className="ad-zone my-4" dangerouslySetInnerHTML={{ __html: adZone.code }} />
}

export { AdZoneComponent as AdZone }
