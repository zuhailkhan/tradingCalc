import { formatCurrency } from "../utils";

export interface IProps {
  maxLosingStreak: number;
  initialCapital: number;
  riskPerTrade: number;
}

const LosingStreakAnalysis = ({
  maxLosingStreak,
  initialCapital,
  riskPerTrade,
}: IProps) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-3">
        Losing Streak Analysis
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-600">
            Max Streak Setting
          </h4>
          <p className="text-lg font-bold text-red-600">
            {maxLosingStreak} trades
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-600">Total Loss</h4>
          <p className="text-lg font-bold text-red-600">
            {formatCurrency(
              (initialCapital * riskPerTrade * maxLosingStreak) / 100
            )}
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-600">
            Capital After Streak
          </h4>
          <p className="text-lg font-bold text-orange-600">
            {formatCurrency(
              initialCapital -
                (initialCapital * riskPerTrade * maxLosingStreak) / 100
            )}
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-600">Drawdown %</h4>
          <p className="text-lg font-bold text-red-600">
            {(riskPerTrade * maxLosingStreak).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LosingStreakAnalysis;
