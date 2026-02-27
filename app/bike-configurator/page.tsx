import PartsPanel from './components/PartsPanel';
import BikeCanvas from './components/BikeCanvas';
import PriceSummary from './components/PriceSummary';

export default function BikeConfiguratorPage() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Bike Configurator Prototype</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <PartsPanel />
        <BikeCanvas />
        <PriceSummary />
      </div>
    </main>
  );
}
