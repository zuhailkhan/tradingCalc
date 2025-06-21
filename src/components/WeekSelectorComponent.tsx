export interface IProps {
    selectedWeek: number;
    updateSelectedWeek: (week: number) => void;
    totalWeeks?: number,
}

const WeekSelectorComponent = ({ selectedWeek, updateSelectedWeek, totalWeeks = 52 }: IProps) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Week for Details:
      </label>
      <input
        type="range"
        min="1"
        max="52"
        value={selectedWeek}
        onChange={(e) => updateSelectedWeek(parseInt(e.target.value))}
        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Week 1</span>
        <span>Week {selectedWeek}</span>
        <span>Week {totalWeeks}</span>
      </div>
    </div>
  );
}

export default WeekSelectorComponent