import { WorldMap } from "./shadcnmaps/maps/world";

export default function VisitedCountries() {
  return (
    <WorldMap regions={[
      { id: 'IN', className: 'fill-chart-3 hover:fill-chart-4' },
      { id: 'SG', className: 'fill-chart-5 hover:fill-chart-4' },
      { id: 'TH', className: 'fill-chart-5 hover:fill-chart-4' },
      { id: 'AE', className: 'fill-chart-5 hover:fill-chart-4' },
      { id: 'MY', className: 'fill-chart-5 hover:fill-chart-4' },
      { id: 'PT', className: 'fill-chart-5 hover:fill-chart-4' },
      { id: 'VN', className: 'fill-chart-5 hover:fill-chart-4' },
      { id: 'LK', className: 'fill-chart-5 hover:fill-chart-4' },
    ]} />
  );
}