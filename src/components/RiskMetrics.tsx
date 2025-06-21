import RiskAnalysis from "./RiskAnalysis";
import ProbabilityAnalysis from "./ProbabilityAnalysis";
import LosingStreakAnalysis from "./LosingStreakAnalysis";
import { formatCurrency } from "../utils";

export interface IProps {
  projectionData: Projection;
  config: Config;
}

const RiskMetrics = ({
  projectionData,
  config: {
    riskPerTrade,
    tradesPerWeek,
    maxLosingStreak,
    roiMax,
    roiMin,
    winRate,
    initialCapital,
  },
}: IProps) => {
  return (
    <div className="bg-red-50 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Risk Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="text-center bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700">Max Weekly Risk</h3>
          <p className="text-lg font-bold text-red-600">
            {projectionData &&
              formatCurrency(
                (projectionData.capital * riskPerTrade * tradesPerWeek) / 100
              )}
          </p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700">Risk-Reward Ratio</h3>
          <p className="text-lg font-bold text-orange-600">
            1:{((roiMin + roiMax) / 200).toFixed(1)}
          </p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700">Expected Win Rate</h3>
          <p className="text-lg font-bold text-green-600">{winRate}%</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg">
        {/* Losing Streak Analysis */}
        <LosingStreakAnalysis
          riskPerTrade={riskPerTrade}
          maxLosingStreak={maxLosingStreak}
          initialCapital={initialCapital}
        />

        {/* Probability Analysis */}
        <ProbabilityAnalysis
          winRate={winRate}
          maxLosingStreak={maxLosingStreak}
        />

        {/* Survival Analysis */}
        <RiskAnalysis
          riskPerTrade={riskPerTrade}
          maxLosingStreak={maxLosingStreak}
        />
      </div>
    </div>
  );
};

export default RiskMetrics;
