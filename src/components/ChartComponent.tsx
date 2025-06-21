import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCurrency } from "../utils";

export interface IProps {
  projectionDataArray: Projection[];
}

const ChartComponent = ({ projectionDataArray }: IProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Capital Growth Over Time
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={projectionDataArray}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
          <Tooltip
            formatter={(value, name) => [formatCurrency(Number(value)), name]}
            labelFormatter={(week) => `Week ${week}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="capital"
            stroke="#2563eb"
            strokeWidth={3}
            name="Total Capital"
          />
          <Line
            type="monotone"
            dataKey="totalInvested"
            stroke="#9333ea"
            strokeWidth={2}
            name="Total Invested"
          />
          <Line
            type="monotone"
            dataKey="totalProfit"
            stroke="#16a34a"
            strokeWidth={2}
            name="Cumulative Profit"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
