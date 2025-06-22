import { formatCurrency } from "../utils";

export interface IProps {
  projectionData: Projection;
  totalWeeks: number;
}

const EndSummary = ({ projectionData, totalWeeks }: IProps) => {

  const formatYears = (years: number) => {
    return `${years} year${years > 1 ? "s" : ""}`;
  };

  const formatMonths = (months: number) => {
    return `${months} month${months > 1 ? "s" : ""}`;
  };

  const getSummaryContext = () => {
    if (!projectionData) {
      return "No data available for the summary.";
    }

    const years = Math.floor(totalWeeks / 52);
    const remainingWeeks = totalWeeks % 52;
    const months = Math.round(remainingWeeks / 4.345);

    if (totalWeeks % 52 === 0 && years > 0) {
      return `Summary for ${formatYears(years)} of trading.`;
    }

    if (years > 0 && months > 0) {
      return `Summary for ${formatYears(years)} and ${formatMonths(months)} of trading.`;
    }

    if (years > 0) {
      return `Summary for ${formatYears(years)} of trading.`;
    }

    return `Summary for ${formatMonths(months)} of trading.`;
  };

  return (
    <div className="bg-indigo-50 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        { getSummaryContext() }
      </h2>
      {projectionData && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Total Invested</h3>
            <p className="text-xl font-bold text-purple-600">
              {formatCurrency(projectionData.totalInvested)}
            </p>
          </div>
          <div className="text-center bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Total Capital</h3>
            <p className="text-xl font-bold text-green-600">
              {formatCurrency(projectionData.capital)}
            </p>
          </div>
          <div className="text-center bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Total Profit</h3>
            <p className="text-xl font-bold text-blue-600">
              {formatCurrency(projectionData.totalProfit)}
            </p>
          </div>
          <div className="text-center bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">ROI %</h3>
            <p className="text-xl font-bold text-orange-600">
              {(
                (projectionData.totalProfit / projectionData.totalInvested) *
                100
              ).toFixed(1)}
              %
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EndSummary;
