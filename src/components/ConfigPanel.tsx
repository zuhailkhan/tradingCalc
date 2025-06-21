import { formatCurrency } from "../utils";

export interface IProps {
  config: Config;
  updateConfig: (updated: Config) => void;
}

const ConfigPanel = ({ config, updateConfig }: IProps) => {
  const handleConfigChange = (field: ConfigField, value: string) => {
    updateConfig({ ...config, [field]: parseFloat(value) ?? 0 });
  };

  return (
    <div>
      {/* Configuration Panel */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Trading Configuration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Initial Capital (₹)
            </label>
            <input
              type="number"
              value={config.initialCapital}
              onChange={(e) =>
                handleConfigChange("initialCapital", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Topup (₹)
            </label>
            <input
              type="number"
              value={config.monthlyTopup}
              onChange={(e) =>
                handleConfigChange("monthlyTopup", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Risk per Trade (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={config.riskPerTrade}
              onChange={(e) =>
                handleConfigChange("riskPerTrade", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Win Rate (%)
            </label>
            <input
              type="number"
              step="1"
              min="0"
              max="100"
              value={config.winRate}
              onChange={(e) => handleConfigChange("winRate", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min ROI (%)
            </label>
            <input
              type="number"
              step="1"
              value={config.roiMin}
              onChange={(e) => handleConfigChange("roiMin", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max ROI (%)
            </label>
            <input
              type="number"
              step="1"
              value={config.roiMax}
              onChange={(e) => handleConfigChange("roiMax", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stop Loss (%)
            </label>
            <input
              type="number"
              step="1"
              value={config.lossRate}
              onChange={(e) => handleConfigChange("lossRate", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trades per Week
            </label>
            <input
              type="number"
              step="1"
              min="1"
              value={config.tradesPerWeek}
              onChange={(e) =>
                handleConfigChange("tradesPerWeek", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Losing Streak
            </label>
            <input
              type="number"
              step="1"
              min="1"
              value={config.maxLosingStreak}
              onChange={(e) =>
                handleConfigChange("maxLosingStreak", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Current Configuration Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 bg-blue-50 p-4 rounded-lg">
        <div className="text-center">
          <h3 className="font-semibold text-gray-700">Initial Capital</h3>
          <p className="text-lg text-blue-600">
            {formatCurrency(config.initialCapital)}
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-700">Monthly Topup</h3>
          <p className="text-lg text-blue-600">
            {formatCurrency(config.monthlyTopup)}
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-700">Risk per Trade</h3>
          <p className="text-lg text-blue-600">{config.riskPerTrade}%</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-700">Win Rate</h3>
          <p className="text-lg text-blue-600">{config.winRate}%</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-700">Avg ROI</h3>
          <p className="text-lg text-blue-600">
            {(config.roiMin + config.roiMax) / 2}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
