import { useState } from 'react';
import './App.css'
import TradingProjection from './components/TradingProjection'

const weeksPerMonth = 4.34 // Approximate weeks per month
const weeksPerYear = 52 // Approximate weeks per year

function App() {
  const [totalWeeks, setTotalWeeks] = useState(weeksPerYear)
  const [visibleDuration, setVisibleDuration] = useState(totalWeeks)
  const [durationUnit, setDurationUnit] = useState('weeks')

  const handleDurationUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const unit = e.target.value;
    setDurationUnit(unit);
    switch (unit) {
      case 'weeks':
        setVisibleDuration(totalWeeks);
        break;
      case 'months':
        setVisibleDuration(Math.ceil(totalWeeks / weeksPerMonth)); // Approximate weeks per month
        break;
      case 'years':
        setVisibleDuration(Math.ceil(totalWeeks / weeksPerYear)); // Approximate weeks per year
        break;
      default:
        setVisibleDuration(totalWeeks);
    }
  };

  const handleVisibleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = Number(e.target.value);
    if (isNaN(newDuration) || newDuration < 1) {
      return;
    }
    setVisibleDuration(newDuration);
    switch (durationUnit) {
      case 'weeks':
        setTotalWeeks(newDuration);
        break;
      case 'months':
        setTotalWeeks(newDuration * weeksPerMonth); // Convert months to weeks
        break;
      case 'years':
        setTotalWeeks(newDuration * weeksPerYear); // Convert years to weeks
        break;
      default:
        setTotalWeeks(newDuration);
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
          value={visibleDuration}
          onChange={handleVisibleDurationChange}
          className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
          min={1}
        />
        <select
          name="durationUnit"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={durationUnit}
          onChange={handleDurationUnitChange}
        >
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
      </div>
      <TradingProjection totalWeeks={totalWeeks}/>
    </>
  );
}

export default App
