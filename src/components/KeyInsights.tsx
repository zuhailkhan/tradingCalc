import { formatCurrency } from '../utils';

export interface IProps {
    projectionDataArray: Projection[]
}

const KeyInsights = ({
   projectionDataArray,
}: IProps) => {
  return (
    <div className="bg-yellow-50 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Key Projections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <h3 className="font-semibold text-gray-700">After 3 Months</h3>
          <p className="text-lg text-blue-600">
            {projectionDataArray[12] &&
              formatCurrency(projectionDataArray[12].weeklyProfit)}{" "}
            / week
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-700">After 6 Months</h3>
          <p className="text-lg text-blue-600">
            {projectionDataArray[25] &&
              formatCurrency(projectionDataArray[25].weeklyProfit)}{" "}
            / week
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-700">After 1 Year</h3>
          <p className="text-lg text-blue-600">
            {projectionDataArray[51] &&
              formatCurrency(projectionDataArray[51].weeklyProfit)}{" "}
            / week
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyInsights