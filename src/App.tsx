import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Factions } from './components/Factions';
import { HowToJoin } from './components/HowToJoin';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Staff } from './components/Staff';
import { Updates } from './components/Updates';
import { SafeZones } from './components/SafeZones';
import { Info } from './components/Info';

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Updates />
      <Features />
      <Factions />
      <SafeZones />
      <Staff />
      <HowToJoin />
      <Info />
      <Gallery />
      <Footer />
    </div>
  );
}
