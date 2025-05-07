import './App.css';
import AllInOnePlatform from './components/AllInOnePlatform';
import DeelImpact from './components/DeelImpact';
import GlobalComplianceHub from './components/GlobalComplianceHub';
import GlobalCoverage from './components/GlobalCoverage';
import GlobalTrust from './components/GlobalTrust';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ValueProp from './components/ValueProp';
import TwistedDivider from './ui/TwistedDivider';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProp />
      <GlobalTrust />
      <DeelImpact />
      <AllInOnePlatform />
      <GlobalComplianceHub />
      <GlobalCoverage />
    </div>
  );
}

export default App;
