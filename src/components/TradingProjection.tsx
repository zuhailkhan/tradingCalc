import { useState, useEffect } from "react";
import ProjectionAssumptions from "./ProjectionAssumptions";
import RiskMetrics from "./RiskMetrics";
import KeyInsights from "./KeyInsights";
import ChartComponent from "./ChartComponent";
import DetailsByWeek from "./DetailsByWeek";
import WeekSelectorComponent from "./WeekSelectorComponent";
import ConfigPanel from "./ConfigPanel";
import EndSummary from "./EndSummary";

interface IProps {
  totalWeeks?: number // weeks
}

const TradingProjection = ({ totalWeeks = 52 }: IProps) => {
  const [projectionData, setProjectionData] = useState<Projection[]>([]);
  const [selectedWeek, setSelectedWeek] = useState(1);

  const [config, setConfig] = useState<Config>({
    initialCapital: 200000,
    monthlyTopup: 90000,
    riskPerTrade: 2,
    roiMin: 90,
    roiMax: 150,
    winRate: 75,
    lossRate: 100,
    tradesPerWeek: 4,
    maxLosingStreak: 5,
  });

  const weeksPerMonth = 4.34;

  useEffect(() => {
    calculateProjections();
  }, [config, totalWeeks]);

  const calculateProjections = () => {
    const data = [];
    let currentCapital = config.initialCapital;
    let totalProfit = 0;
    let totalInvested = config.initialCapital;

    for (let week = 1; week <= totalWeeks; week++) {
      // Add monthly topup (every ~4.33 weeks)
      if (week > 1 && (week - 1) % Math.round(weeksPerMonth) === 0) {
        currentCapital += config.monthlyTopup;
        totalInvested += config.monthlyTopup;
      }

      let weeklyProfit = 0;
      let tempCapital = currentCapital;

      // Calculate trades for the week
      for (let trade = 0; trade < config.tradesPerWeek; trade++) {
        const riskAmount = tempCapital * (config.riskPerTrade / 100);

        if (Math.random() < config.winRate / 100) {
          // Winning trade - use average ROI
          const avgROI = (config.roiMin + config.roiMax) / 200; // Convert to decimal
          const profit = riskAmount * avgROI;
          weeklyProfit += profit;
          tempCapital += profit;
        } else {
          // Losing trade - lose the risk amount
          const loss = riskAmount * (config.lossRate / 100);
          weeklyProfit -= loss;
          tempCapital -= loss;
        }
      }

      currentCapital = tempCapital;
      totalProfit += weeklyProfit;

      data.push({
        week,
        capital: Math.round(currentCapital),
        weeklyProfit: Math.round(weeklyProfit),
        totalProfit: Math.round(totalProfit),
        totalInvested: Math.round(totalInvested),
        month: Math.ceil(week / weeksPerMonth),
      });
    }

    setProjectionData(data);
  };

  const selectedWeekData = projectionData[selectedWeek - 1];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-2xl p-8">

        {/* Chart */}
        <ChartComponent projectionDataArray={projectionData}/>

        {/* Config Panel */}
        <ConfigPanel
          config={config}
          updateConfig={(updatedConfig) => setConfig(updatedConfig)}
        />

        {/* Week Selector */}
        <WeekSelectorComponent
          selectedWeek={selectedWeek}
          updateSelectedWeek={(week) => setSelectedWeek(week)}
          totalWeeks={totalWeeks}
        />

        {/* Selected Week Details */}
        {selectedWeekData && (
          <DetailsByWeek
            selectedWeekData={selectedWeekData}
            weekNumber={selectedWeek}
          />
        )}

        {/* Key Insights */}
        <KeyInsights projectionDataArray={projectionData} totalYears={Math.ceil(totalWeeks / 52)} />

        {/* Year-End Summary */}
        <EndSummary projectionData={projectionData.at(-1) as Projection} totalYears={Math.ceil(totalWeeks / 52)} />

        {/* Risk Metrics */}
        <RiskMetrics config={config} projectionData={projectionData.at(-1) as Projection} />

        {/* Assumptions */}
        <ProjectionAssumptions lossRate={config.lossRate} />
      </div>
    </div>
  );
};

export default TradingProjection;
