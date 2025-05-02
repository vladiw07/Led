import './App.css';
import AllInOnePlatform from './components/AllInOnePlatform';
import DeelImpact from './components/DeelImpact';
import GlobalTrust from './components/GlobalTrust';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ValueProp from './components/ValueProp';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProp />
      <GlobalTrust />
      <DeelImpact />
      <AllInOnePlatform />
    </div>
  );
}

export default App;
