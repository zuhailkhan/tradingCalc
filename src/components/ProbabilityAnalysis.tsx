export interface IProps {
    winRate: number
    maxLosingStreak: number
}

const ProbabilityAnalysis = ({ winRate, maxLosingStreak }: IProps) => {
  return (
    <div className="mt-4 p-3 bg-gray-50 rounded">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">
        Probability of Streak Occurring:
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
        <div>
          <span className="font-medium">5 losses:</span>
          <span className="ml-1 text-red-600">
            {(Math.pow((100 - winRate) / 100, 5) * 100).toFixed(3)}%
          </span>
        </div>
        <div>
          <span className="font-medium">7 losses:</span>
          <span className="ml-1 text-red-600">
            {(Math.pow((100 - winRate) / 100, 7) * 100).toFixed(4)}%
          </span>
        </div>
        <div>
          <span className="font-medium">{maxLosingStreak} losses:</span>
          <span className="ml-1 text-red-600">
            {(
              Math.pow((100 - winRate) / 100, maxLosingStreak) *
              100
            ).toFixed(6)}
            %
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProbabilityAnalysis