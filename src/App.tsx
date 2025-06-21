import './App.css'
import TradingProjection from './components/TradingProjection'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Trading PnL Projection
      </h1>
      <TradingProjection totalWeeks={64}/>
    </>
  );
}

export default App
