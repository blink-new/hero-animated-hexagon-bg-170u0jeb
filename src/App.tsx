import HexagonBackground from './components/HexagonBackground';
import HeroContent from './components/HeroContent';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Hexagon Beehive Background */}
      <HexagonBackground />
      
      {/* Hero Content */}
      <HeroContent />
      
      {/* Ambient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default App;