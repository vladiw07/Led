import './App.css';
import GlobalTrust from './components/GlobalTrust';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ValueProp from './components/ValueProp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ValueProp />
      <GlobalTrust />
    </div>
  );
}

export default App;
