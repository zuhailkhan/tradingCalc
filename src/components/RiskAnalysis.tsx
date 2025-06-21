export interface IRiskAnalysisProps {
    riskPerTrade: number
    maxLosingStreak: number
}

const RiskAnalysis = ({ riskPerTrade, maxLosingStreak }: IRiskAnalysisProps) => {
  return (
    <div className="mt-4 p-3 bg-blue-50 rounded">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">
        Capital Survival Analysis:
      </h4>
      <div className="text-sm text-gray-600">
        <p>
          • <span className="font-medium">Maximum theoretical streak:</span>{" "}
          {Math.floor(100 / riskPerTrade)} trades (complete capital loss)
        </p>
        <p>
          • <span className="font-medium">Recommended max streak:</span>{" "}
          {Math.floor(30 / riskPerTrade)} trades (30% drawdown limit)
        </p>
        {(() => {
          let riskLabel;
          if (maxLosingStreak <= Math.floor(30 / riskPerTrade)) {
            riskLabel = (
              <span className="text-green-600 ml-1">Conservative ✓</span>
            );
          } else if (
            maxLosingStreak <= Math.floor(50 / riskPerTrade)
          ) {
            riskLabel = (
              <span className="text-yellow-600 ml-1">Moderate ⚠</span>
            );
          } else {
            riskLabel = <span className="text-red-600 ml-1">Aggressive ⚠</span>;
          }
          return (
            <p>
              •{" "}
              <span className="font-medium">
                Your setting ({maxLosingStreak} trades):
              </span>
              {riskLabel}
            </p>
          );
        })()}
      </div>
    </div>
  );
}

export default RiskAnalysis