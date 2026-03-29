"use client"

import { Map, MapClusterLayer, MapMarker, MarkerContent, MarkerTooltip, useMap } from "./ui/map";
import { useEffect } from "react";

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

export default function Globe() {
  const livedCities = [
    {
      name: "Chennai",
      longitude: 80.27072,
      latitude: 13.08268,
    },
    {
      name: "Tiruppur",
      longitude: 77.348045,
      latitude: 11.110695,
    }
  ]
  const visitedCities = [
    {
      name: "Singapore",
      longitude: 103.822872,
      latitude: 1.364917,
    },
    {
      name: "Bangkok",
      longitude: 100.5018,
      latitude: 13.7563,
    },
    {
      name: "Dubai",
      longitude: 55.2708,
      latitude: 25.2048,
    },
    {
      name: "Lisbon",
      longitude: -9.1393,
      latitude: 38.7223,
    },
    {
      name: "Faro",
      longitude: -7.9316,
      latitude: 37.0191,
    },
    {
      name: "Albufeira",
      longitude: -8.2511,
      latitude: 37.0884,
    },
    {
      name: "Kuala Lumpur",
      longitude: 101.693207,
      latitude: 3.140853,
    },
    {
      name: "Ho Chi Minh City",
      longitude: 106.6297,
      latitude: 10.8231,
    },
    {
      name: "Langkawi",
      longitude: 99.8433,
      latitude: 6.3167,
    },
    {
      name: "Penang",
      longitude: 100.3333,
      latitude: 5.4167,
    },
    {
      name: "Pattaya",
      longitude: 100.9933,
      latitude: 12.9231,
    },
    {
      name: "Phuket",
      longitude: 98.3923,
      latitude: 7.8804,
    },
    {
      name: "Krabi",
      longitude: 98.9067,
      latitude: 7.9517,
    },
    {
      name: "Colombo",
      longitude: 79.8541,
      latitude: 6.9271,
    },
    {
      name: "Da Nang",
      longitude: 108.2022,
      latitude: 16.0544,
    },
    {
      name: "Hoi An",
      longitude: 108.335,
      latitude: 15.8772,
    },
    {
      name: "Phu Quoc",
      longitude: 104.0167,
      latitude: 10.2167,
    },
    {
      name: "Hanoi",
      longitude: 105.8542,
      latitude: 21.0245,
    },
    {
      name: "Ninh Binh",
      longitude: 105.5833,
      latitude: 20.25,
    },
    {
      name: "Ha Long Bay",
      longitude: 107.2167,
      latitude: 20.9167,
    }
  ]
  const indianCities = [
    {
      name: "Delhi",
      longitude: 77.2090,
      latitude: 28.6139,
    },
    {
      name: "Goa",
      longitude: 74.1240,
      latitude: 15.2993,
    },
    {
      name: "Pune",
      longitude: 73.8567,
      latitude: 18.5204,
    },
    {
      name: "Mumbai",
      longitude: 72.8777,
      latitude: 19.0760,
    },
    {
      name: "Bengaluru",
      longitude: 77.5946,
      latitude: 12.9716,
    },
    {
      name: "Kochi",
      longitude: 76.2711,
      latitude: 9.9252,
    },
    {
      name: "Mysuru",
      longitude: 76.6394,
      latitude: 12.2958,
    },
    {
      name: "Pondicherry",
      longitude: 79.8304,
      latitude: 11.9416,
    },
    {
      name: "Ooty",
      longitude: 76.6972,
      latitude: 11.4106,
    },
    {
      name: "Kodaikanal",
      longitude: 77.4999,
      latitude: 10.2333,
    },
    {
      name: "Kanyakumari",
      longitude: 77.5375,
      latitude: 8.0883,
    },
    {
      name: "Rameswaram",
      longitude: 79.3125,
      latitude: 9.2938,
    },
    {
      name: "Tiruchirappalli",
      longitude: 78.7047,
      latitude: 10.7905,
    },
    {
      name: "Thiruvananthapuram",
      longitude: 76.9366,
      latitude: 8.5241,
    },
    {
      name: "Varkala",
      longitude: 76.7333,
      latitude: 8.7333,
    },
    {
      name: "Karaikudi",
      longitude: 78.7967,
      latitude: 10.0722,
    },
    {
      name: "Kovilpatti",
      longitude: 77.7408,
      latitude: 9.1795,
    },
    {
      name: "Virudhunagar",
      longitude: 77.9708,
      latitude: 9.5703,
    },
    {
      name: "Tiruchendur",
      longitude: 78.1333,
      latitude: 8.4833,
    },
    {
      name: "Thoothukudi",
      longitude: 78.1348,
      latitude: 8.7642,
    },
    {
      name: "Courtallam",
      longitude: 77.2779,
      latitude: 8.9341,
    },
    {
      name: "Sabarimala",
      longitude: 77.0820,
      latitude: 9.4321,
    },
    {
      name: "Palani",
      longitude: 77.4111,
      latitude: 10.4515,
    }
  ]
  return (
    <Map zoom={2} projection={{ type: 'globe' }} center={[78.121719, 9.919093]} className="h-160">
      {indianCities.map((city) => (
        <MapMarker key={city.name} longitude={city.longitude} latitude={city.latitude}>
          <MarkerTooltip>{city.name}</MarkerTooltip>
          <MarkerContent>
            <span className="relative flex size-1">
              <span className="absolute inline-flex h-full w-full rounded-full bg-chart-2 dark:bg-chart-4 opacity-75"></span>
              <span className="relative inline-flex size-1 rounded-full bg-chart-2 dark:bg-chart-4"></span>
            </span>
          </MarkerContent>
        </MapMarker>
      ))}
      {visitedCities.map((city) => (
        <MapMarker key={city.name} longitude={city.longitude} latitude={city.latitude}>
          <MarkerTooltip>{city.name}</MarkerTooltip>
          <MarkerContent>
            <span className="relative flex size-1">
              <span className="absolute inline-flex h-full w-full rounded-full bg-chart-3 opacity-75"></span>
              <span className="relative inline-flex size-1 rounded-full bg-chart-3"></span>
            </span>
          </MarkerContent>
        </MapMarker>
      ))}
      {livedCities.map((city) => (
        <MapMarker key={city.name} longitude={city.longitude} latitude={city.latitude}>
          <MarkerTooltip>{city.name}</MarkerTooltip>
          <MarkerContent>
            <span className="relative flex size-1">
              <span className="absolute inline-flex h-full w-full rounded-full bg-chart-4 dark:bg-chart-2 opacity-75"></span>
              <span className="relative inline-flex size-1 rounded-full bg-chart-4 dark:bg-chart-2"></span>
            </span>
          </MarkerContent>
        </MapMarker>
      ))}
      <MapMarker longitude={78.121719} latitude={9.919093}>
        <MarkerTooltip>Madurai</MarkerTooltip>
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