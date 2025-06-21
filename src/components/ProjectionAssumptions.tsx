const ProjectionAssumptions = ({ lossRate }: { lossRate: number}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold text-gray-700 mb-2">Model Assumptions:</h3>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Monthly topup added every 4.33 weeks (average month length)</li>
        <li>• ROI calculated as average of min and max range</li>
        <li>• Random distribution of wins/losses based on win rate</li>
        <li>• Capital compounds with each profitable trade</li>
        <li>• Stop loss results in {lossRate}% loss of risk amount</li>
        <li>• No slippage, fees, or market gaps considered</li>
      </ul>
    </div>
  );
}

export default ProjectionAssumptions