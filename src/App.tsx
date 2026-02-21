import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import BuildTeam from './components/BuildTeam';
import ForWho from './components/ForWho';
import Motivation from './components/Motivation';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <BuildTeam />
      <ForWho />
      <Motivation />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
