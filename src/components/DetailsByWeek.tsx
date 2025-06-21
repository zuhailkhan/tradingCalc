import { formatCurrency } from "../utils";

export interface IProps {
  selectedWeekData: Projection;
  weekNumber: number;
}

const DetailsByWeek = ({ selectedWeekData, weekNumber }: IProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
      <div className="text-center">
        <h3 className="font-semibold text-gray-700">Week {weekNumber}</h3>
        <p className="text-sm text-gray-500">Month {selectedWeekData.month}</p>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-gray-700">Total Capital</h3>
        <p className="text-xl font-bold text-green-600">
          {formatCurrency(selectedWeekData.capital)}
        </p>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-gray-700">Total Invested</h3>
        <p className="text-lg font-bold text-purple-600">
          {formatCurrency(selectedWeekData.totalInvested)}
        </p>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-gray-700">Weekly Profit</h3>
        <p
          className={`text-xl font-bold ${
            selectedWeekData.weeklyProfit >= 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {formatCurrency(selectedWeekData.weeklyProfit)}
        </p>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-gray-700">Total Profit</h3>
        <p className="text-xl font-bold text-blue-600">
          {formatCurrency(selectedWeekData.totalProfit)}
        </p>
      </div>
    </div>
  );
};

export default DetailsByWeek;
