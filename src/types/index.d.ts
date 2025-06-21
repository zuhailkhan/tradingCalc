type Projection = {
  week: number;
  capital: number;
  weeklyProfit: number;
  totalProfit: number;
  totalInvested: number;
  month: number;
};

interface Config {
  initialCapital: number;
  monthlyTopup: number;
  riskPerTrade: number;
  roiMin: number;
  roiMax: number;
  winRate: number;
  lossRate: number;
  tradesPerWeek: number;
  maxLosingStreak: number;
}

type ConfigField = keyof Config;