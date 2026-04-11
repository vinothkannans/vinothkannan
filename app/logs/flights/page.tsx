import AppBreadcrumb from "@/components/app-breadcrumb";
import Delayed from "@/components/delayed";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FlightMultiRoute, FlightRoute } from "@/components/ui/flight";
import { Map } from "@/components/ui/map";

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  return {
    title: "Flights - Logs",
    description: "The log of flights I have taken so far",
  }
}

const routes = [
  {
    trip: 1,
    date: "2016-03-16",
    from: "IXM",
    to: "MAA",
    airlineCode: "SG",
    flightNumber: 612
  },
  {
    trip: 2,
    date: "2018-09-22",
    from: "IXM",
    to: "DEL",
    airlineCode: "IX",
    flightNumber: 164
  },
  {
    trip: 2,
    date: "2018-09-22",
    from: "DEL",
    to: "SIN",
    airlineCode: "AI",
    flightNumber: 380
  },
  {
    trip: 2,
    date: "2018-09-30",
    from: "SIN",
    to: "DEL",
    airlineCode: "AI",
    flightNumber: 381
  },
  {
    trip: 2,
    date: "2018-09-30",
    from: "DEL",
    to: "IXM",
    airlineCode: "IX",
    flightNumber: 163
  },
  {
    trip: 3,
    date: "2021-12-13",
    from: "IXM",
    to: "BLR",
    airlineCode: "6E",
    flightNumber: 7172
  },
  {
    trip: 3,
    date: "2021-12-13",
    from: "BLR",
    to: "PNQ",
    airlineCode: "6E",
    flightNumber: 6104
  },
  {
    trip: 3,
    date: "2021-12-16",
    from: "PNQ",
    to: "BLR",
    airlineCode: "6E",
    flightNumber: 302
  },
  {
    trip: 3,
    date: "2021-12-16",
    from: "BLR",
    to: "IXM",
    airlineCode: "6E",
    flightNumber: 7218
  },
  {
    trip: 4,
    date: "2021-12-28",
    from: "IXM",
    to: "BOM",
    airlineCode: "6E",
    flightNumber: 5363
  },
  {
    trip: 4,
    date: "2022-01-02",
    from: "BOM",
    to: "IXM",
    airlineCode: "6E",
    flightNumber: 5364
  },
  {
    trip: 5,
    date: "2022-06-10",
    from: "IXM",
    to: "BLR",
    airlineCode: "6E",
    flightNumber: 7223
  },
  {
    trip: 5,
    date: "2022-06-10",
    from: "BLR",
    to: "BKK",
    airlineCode: "6E",
    flightNumber: 75
  },
  {
    trip: 5,
    date: "2022-06-13",
    from: "BKK",
    to: "BLR",
    airlineCode: "6E",
    flightNumber: 76
  },
  {
    trip: 5,
    date: "2022-06-13",
    from: "BLR",
    to: "IXM",
    airlineCode: "6E",
    flightNumber: 7171
  },
  {
    trip: 6,
    date: "2022-10-22",
    from: "BLR",
    to: "DXB",
    airlineCode: "EK",
    flightNumber: 563
  },
  {
    trip: 6,
    date: "2022-10-29",
    from: "DXB",
    to: "BLR",
    airlineCode: "EK",
    flightNumber: 566
  },
  {
    trip: 7,
    date: "2023-03-11",
    from: "IXM",
    to: "MAA",
    airlineCode: "AI",
    flightNumber: 672
  },
  {
    trip: 7,
    date: "2023-03-13",
    from: "MAA",
    to: "SIN",
    airlineCode: "SQ",
    flightNumber: 529
  },
  {
    trip: 7,
    date: "2023-03-14",
    from: "SIN",
    to: "KUL",
    airlineCode: "SQ",
    flightNumber: 108
  },
  {
    trip: 7,
    date: "2023-03-21",
    from: "KUL",
    to: "SIN",
    airlineCode: "SQ",
    flightNumber: 105
  },
  {
    trip: 7,
    date: "2023-03-21",
    from: "SIN",
    to: "MAA",
    airlineCode: "SQ",
    flightNumber: 528
  },
  {
    trip: 7,
    date: "2023-03-22",
    from: "MAA",
    to: "IXM",
    airlineCode: "AI",
    flightNumber: 671
  },
  {
    trip: 8,
    date: "2023-07-30",
    from: "IXM",
    to: "MAA",
    airlineCode: "AI",
    flightNumber: 672
  },
  {
    trip: 8,
    date: "2023-07-31",
    from: "MAA",
    to: "IXM",
    airlineCode: "6E",
    flightNumber: 7029
  },
  {
    trip: 9,
    date: "2023-09-15",
    from: "IXM",
    to: "MAA",
    airlineCode: "AI",
    flightNumber: 672
  },
  {
    trip: 9,
    date: "2023-09-15",
    from: "MAA",
    to: "DXB",
    airlineCode: "EK",
    flightNumber: 547
  },
  {
    trip: 9,
    date: "2023-09-16",
    from: "DXB",
    to: "LIS",
    airlineCode: "EK",
    flightNumber: 191
  },
  {
    trip: 9,
    date: "2023-09-16",
    from: "LIS",
    to: "FAO",
    airlineCode: "TP",
    flightNumber: 1903
  },
  {
    trip: 9,
    date: "2023-09-22",
    from: "FAO",
    to: "LIS",
    airlineCode: "TP",
    flightNumber: 1904
  },
  {
    trip: 9,
    date: "2023-09-22",
    from: "LIS",
    to: "DXB",
    airlineCode: "EK",
    flightNumber: 194
  },
  {
    trip: 9,
    date: "2023-09-23",
    from: "DXB",
    to: "MAA",
    airlineCode: "EK",
    flightNumber: 546
  },
  {
    trip: 9,
    date: "2023-09-24",
    from: "MAA",
    to: "IXM",
    airlineCode: "AI",
    flightNumber: 671
  },
  {
    trip: 10,
    date: "2023-10-21",
    from: "TRV",
    to: "SIN",
    airlineCode: "TR",
    flightNumber: 531
  },
  {
    trip: 10,
    date: "2023-10-22",
    from: "SIN",
    to: "SGN",
    airlineCode: "TR",
    flightNumber: 306
  },
  {
    trip: 10,
    date: "2023-10-27",
    from: "SGN",
    to: "SIN",
    airlineCode: "TR",
    flightNumber: 303
  },
  {
    trip: 10,
    date: "2023-10-28",
    from: "SIN",
    to: "TRV",
    airlineCode: "TR",
    flightNumber: 530
  },
  {
    trip: 11,
    date: "2024-05-04",
    from: "TRZ",
    to: "SIN",
    airlineCode: "TR",
    flightNumber: 565
  },
  {
    trip: 11,
    date: "2024-05-05",
    from: "SIN",
    to: "LGK",
    airlineCode: "TR",
    flightNumber: 476
  },
  {
    trip: 11,
    date: "2024-05-11",
    from: "LGK",
    to: "PEN",
    airlineCode: "AK",
    flightNumber: 6240
  },
  {
    trip: 11,
    date: "2024-05-17",
    from: "PEN",
    to: "KUL",
    airlineCode: "MH",
    flightNumber: 1145
  },
  {
    trip: 11,
    date: "2024-05-23",
    from: "KUL",
    to: "SIN",
    airlineCode: "TR",
    flightNumber: 453
  },
  {
    trip: 11,
    date: "2024-05-23",
    from: "SIN",
    to: "TRZ",
    airlineCode: "TR",
    flightNumber: 562
  },
  {
    trip: 12,
    date: "2024-08-10",
    from: "IXM",
    to: "MAA",
    airlineCode: "AI",
    flightNumber: 672
  },
  {
    trip: 12,
    date: "2024-08-13",
    from: "MAA",
    to: "IXM",
    airlineCode: "AI",
    flightNumber: 671
  },
  {
    trip: 13,
    date: "2024-09-25",
    from: "IXM",
    to: "SIN",
    airlineCode: "IX",
    flightNumber: 684
  },
  {
    trip: 13,
    date: "2024-09-29",
    from: "SIN",
    to: "KUL",
    airlineCode: "AK",
    flightNumber: 710
  },
  {
    trip: 13,
    date: "2024-10-01",
    from: "KUL",
    to: "SIN",
    airlineCode: "TR",
    flightNumber: 453
  },
  {
    trip: 13,
    date: "2024-10-03",
    from: "SIN",
    to: "IXM",
    airlineCode: "IX",
    flightNumber: 683
  },
  {
    trip: 14,
    date: "2025-04-12",
    from: "TRZ",
    to: "SIN",
    airlineCode: "TR",
    flightNumber: 567
  },
  {
    trip: 14,
    date: "2025-04-12",
    from: "SIN",
    to: "BKK",
    airlineCode: "TR",
    flightNumber: 620
  },
  {
    trip: 14,
    date: "2025-04-19",
    from: "BKK",
    to: "HKT",
    airlineCode: "VZ",
    flightNumber: 312
  },
  {
    trip: 14,
    date: "2025-04-29",
    from: "KBV",
    to: "SIN",
    airlineCode: "TR",
    flightNumber: 683
  },
  {
    trip: 14,
    date: "2025-04-29",
    from: "SIN",
    to: "TRZ",
    airlineCode: "TR",
    flightNumber: 558
  },
  {
    trip: 15,
    date: "2026-01-14",
    from: "IXM",
    to: "CMB",
    airlineCode: "UL",
    flightNumber: 140
  },
  {
    trip: 15,
    date: "2026-01-15",
    from: "CMB",
    to: "KUL",
    airlineCode: "UL",
    flightNumber: 318
  },
  {
    trip: 15,
    date: "2026-01-15",
    from: "KUL",
    to: "SGN",
    airlineCode: "MH",
    flightNumber: 750
  },
  {
    trip: 15,
    date: "2026-01-16",
    from: "SGN",
    to: "DAD",
    airlineCode: "QH",
    flightNumber: 154
  },
  {
    trip: 15,
    date: "2026-01-18",
    from: "DAD",
    to: "PQC",
    airlineCode: "VJ",
    flightNumber: 1719
  },
  {
    trip: 15,
    date: "2026-01-21",
    from: "PQC",
    to: "HAN",
    airlineCode: "VJ",
    flightNumber: 1440
  },
  {
    trip: 15,
    date: "2026-01-25",
    from: "HAN",
    to: "SIN",
    airlineCode: "TR",
    flightNumber: 301
  },
  {
    trip: 15,
    date: "2026-01-25",
    from: "SIN",
    to: "TRZ",
    airlineCode: "TR",
    flightNumber: 558
  }
]

if (!Object.groupBy) {
  Object.groupBy = <K extends PropertyKey, T>(
    items: Iterable<T>,
    keySelector: (item: T, index: number) => K
  ): Partial<Record<K, T[]>> => {
    const result: any = {};
    let index = 0;
    for (const item of items) {
      const key = keySelector(item, index++);
      result[key] = result[key] || [];
      result[key].push(item);
    }
    return result;
  };
}

const grouped = Object.groupBy(routes, ({ trip }) => trip)
const groupedArray = Object.values(grouped)

const markerContent = (
  <div className="size-1 bg-foreground rounded-full" />
)

const uniqueInOrder = (arr: any[]) => arr.filter((item, index) => item !== arr[index + 1])
const airports = (routes: any[]) => uniqueInOrder(routes.flatMap(route => [route.from, route.to]))

let groupedRoutes = groupedArray.map((routes, index) => {
  if (routes) {
    return {
      id: index + 1,
      delay: 0,
      duration: airports(routes).length * 500,
      routes,
    }
  } else {
    return {
      id: index + 1,
      delay: 0,
      duration: 0,
      routes: [],
    }
  }
})
groupedRoutes = groupedRoutes.map((trip, index) => {
  if (index > 0) {
    const prevTrip = groupedRoutes[index - 1]
    trip.delay = prevTrip.delay + prevTrip.duration - 250
  }
  return trip
})

export default function Page() {
  return (
    <div className="relative h-full">
      <div className="text-lg font-semibold absolute top-4 left-4 z-10 flex items-center gap-2 flex w-full">
        <AppBreadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Logs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Flights</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator>-</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-muted-foreground">The log of flights I have taken so far</BreadcrumbPage>
          </BreadcrumbItem>
        </AppBreadcrumb>
      </div>
      <Map zoom={1} center={[50, 20]} className="h-full">
        {groupedRoutes.map((trip) => (
          trip.routes === undefined ? <></> :
            <Delayed
              key={trip.id}
              delay={trip.delay}>
              <FlightMultiRoute
                waypoints={airports(trip.routes)}
                markerContent={markerContent}
                showAirports={true}
                animate={{ iconClassName: "text-chart-3 dark:text-chart-2", duration: trip.duration, loop: false }}
              />
            </Delayed>
        ))}
      </Map>
    </div>
  )
}