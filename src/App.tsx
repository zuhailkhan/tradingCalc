import { useState } from 'react';
import './App.css'
import TradingProjection from './components/TradingProjection'

function App() {
  const [totalWeeks, setTotalWeeks] = useState(52)

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = Number(e.target.value)
    if(isNaN(changeValue)) {
      setTotalWeeks(52)
      alert('Invalid Number')
    }
    if(changeValue <= 1) {
      alert('Please use more than one week')
      setTotalWeeks(10)
    } else {
      setTotalWeeks(Number(e.target.value));
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Trading PnL Projection
      </h1>
      <div className="flex gap-4 justify-end items-center mb-6">
        <label
          htmlFor="durationSelector"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          Duration
        </label>
        <input
          name="durationSelector"
          type="number"
          value={totalWeeks}
          onChange={handleDurationChange}
          className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
          min={1}
        />
      </div>
      <TradingProjection totalWeeks={totalWeeks}/>
    </>
  );
}

export default App
