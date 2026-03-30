"use client"

import { useEffect } from "react";
import { Map, MapMarker, MarkerContent, MarkerTooltip, useMap } from "../ui/map";

export function Spin() {
  const { map, isLoaded } = useMap()

  function rotateGlobe() {
    const lng = 60;
    const lat = 15;

    if (!map) return;

    map.jumpTo({
      center: [lng, lat]
    })
  }

  useEffect(() => {
    if (isLoaded) {
      rotateGlobe();
    }
  }, [isLoaded])

  return (
    <></>
  )
}

export default function VisitedCountries() {
  const visitedCountries = [
    {
      name: "Singapore",
      longitude: 103.822872,
      latitude: 1.364917,
    },
    {
      name: "Thailand",
      longitude: 98.3923,
      latitude: 7.8804,
    },
    {
      name: "UAE",
      longitude: 55.3048,
      latitude: 25.2744,
    },
    {
      name: "Portugal",
      longitude: -7.9316,
      latitude: 37.0191,
    },
    {
      name: "Malaysia",
      longitude: 100.3333,
      latitude: 5.4167,
    },
    {
      name: "Vietnam",
      longitude: 108.335,
      latitude: 15.8772,
    },
    {
      name: "Sri Lanka",
      longitude: 80.7718,
      latitude: 7.8731,
    },
  ]
  return (
    <Map projection={{ type: "globe" }} center={[78.121719, 9.919093]} className="h-380">
      {visitedCountries.map((country) => (
        <MapMarker key={country.name} longitude={country.longitude} latitude={country.latitude}>
          <MarkerTooltip>{country.name}</MarkerTooltip>
          <MarkerContent>
            <span className="relative flex size-1">
              <span className="absolute inline-flex h-full w-full rounded-full bg-chart-3 opacity-75"></span>
              <span className="relative inline-flex size-1 rounded-full bg-chart-3"></span>
            </span>
          </MarkerContent>
        </MapMarker>
      ))}
      <MapMarker longitude={78.9629} latitude={20.5937}>
        <MarkerTooltip>India</MarkerTooltip>
        <MarkerContent>
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-5 dark:bg-chart-1 opacity-75"></span>
            <span className="relative inline-flex size-1 ml-0.5 mt-0.5 rounded-full bg-chart-5 dark:bg-chart-1"></span>
          </span>
        </MarkerContent>
      </MapMarker>
      <Spin />
    </Map>
  )
}