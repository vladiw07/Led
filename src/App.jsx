import Footer from './components/Footer';
import './App.css';
import AllInOnePlatform from './components/AllInOnePlatform';
import CustomerStories from './components/CustomerStories';
import DeelImpact from './components/DeelImpact';
import GettingStartedSteps from './components/GettingStartedSteps';
import GlobalComplianceHub from './components/GlobalComplianceHub';
import GlobalCoverage from './components/GlobalCoverage';
import GlobalTrust from './components/GlobalTrust';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ValueProp from './components/ValueProp';
import TwistedDivider from './ui/TwistedDivider';

function App() {
  return (
    <div className="App bg-[#fef4e3] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProp />
      <GlobalTrust />
      <DeelImpact />
      <AllInOnePlatform />
      <GlobalComplianceHub />
      <GlobalCoverage />
      <CustomerStories />
      <GettingStartedSteps />
      <Footer />
    </div>
  );
}

export default App;
