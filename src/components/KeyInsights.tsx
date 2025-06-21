import { formatCurrency } from "../utils";

export interface IProps {
  projectionDataArray: Projection[];
  totalYears: number;
}

const KeyInsights = ({ projectionDataArray, totalYears }: IProps) => {
  const getInsightIntervals = (totalYears: number) => {
    const patterns = {
      1: [
        { value: 3, unit: "months" },
        { value: 6, unit: "months" },
        { value: 1, unit: "year" },
      ],
      2: [
        { value: 6, unit: "months" },
        { value: 1, unit: "year" },
        { value: 2, unit: "years" },
      ],
    } as const;

    if (patterns[totalYears as keyof typeof patterns]) {
      return patterns[totalYears as keyof typeof patterns];
    }

    // For 3+ years
    const [first, second] = [
      Math.ceil(totalYears / 3),
      Math.ceil((totalYears * 2) / 3),
    ];
    return [
      { value: first, unit: first === 1 ? "year" : "years" },
      { value: second, unit: "years" },
      { value: totalYears, unit: "years" },
    ];
  };

  const getWeekIndex = (value: number, unit: string) => {
    if (unit === "months") {
      return Math.floor(value * 4.33) - 1; // Convert months to weeks, -1 for zero-based index
    } else {
      return Math.floor(value * 52) - 1; // Convert years to weeks, -1 for zero-based index
    }
  };

  const intervals = getInsightIntervals(totalYears);
  return (
    <div className="bg-yellow-50 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Key Projections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {intervals.map((interval) => {
          const weekIndex = getWeekIndex(interval.value, interval.unit);
          const projectionData = projectionDataArray[weekIndex];
          const key = `${interval.value}-${interval.unit}`;

          return (
            <div key={key} className="text-center">
              <h3 className="font-semibold text-gray-700">
                After {interval.value} {interval.unit}
              </h3>
              <p className="text-lg text-blue-600">
                {projectionData && formatCurrency(projectionData.weeklyProfit)}{" "}
                / week
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyInsights;
