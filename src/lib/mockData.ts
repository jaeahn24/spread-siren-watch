
export interface Market {
  id: string;
  name: string;
  bestBid: number;
  bestAsk: number;
  lastUpdate: string;
}

export interface Alert {
  id: string;
  marketName: string;
  type: "widen" | "tighten";
  currentSpread: number;
  threshold: number;
  timestamp: string;
  severity: "low" | "medium" | "high";
}

export const mockMarkets: Market[] = [
  {
    id: "1",
    name: "Biden wins 2024",
    bestBid: 0.52,
    bestAsk: 0.58,
    lastUpdate: new Date().toISOString()
  },
  {
    id: "2", 
    name: "Trump wins 2024",
    bestBid: 0.41,
    bestAsk: 0.47,
    lastUpdate: new Date().toISOString()
  },
  {
    id: "3",
    name: "Republicans win House",
    bestBid: 0.63,
    bestAsk: 0.68,
    lastUpdate: new Date().toISOString()
  },
  {
    id: "4",
    name: "Democrats win Senate",
    bestBid: 0.48,
    bestAsk: 0.53,
    lastUpdate: new Date().toISOString()
  },
  {
    id: "5",
    name: "DeSantis wins GOP primary",
    bestBid: 0.15,
    bestAsk: 0.22,
    lastUpdate: new Date().toISOString()
  },
  {
    id: "6",
    name: "Fed raises rates in Dec",
    bestBid: 0.31,
    bestAsk: 0.35,
    lastUpdate: new Date().toISOString()
  }
];

export const mockAlerts: Alert[] = [
  {
    id: "1",
    marketName: "Biden wins 2024",
    type: "widen",
    currentSpread: 0.067,
    threshold: 0.05,
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    severity: "high"
  },
  {
    id: "2",
    marketName: "Trump wins 2024", 
    type: "tighten",
    currentSpread: 0.032,
    threshold: 0.04,
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    severity: "medium"
  },
  {
    id: "3",
    marketName: "Republicans win House",
    type: "widen",
    currentSpread: 0.058,
    threshold: 0.05,
    timestamp: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
    severity: "medium"
  },
  {
    id: "4",
    marketName: "DeSantis wins GOP primary",
    type: "widen",
    currentSpread: 0.089,
    threshold: 0.06,
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    severity: "high"
  },
  {
    id: "5",
    marketName: "Fed raises rates in Dec",
    type: "tighten",
    currentSpread: 0.025,
    threshold: 0.03,
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    severity: "low"
  },
  {
    id: "6",
    marketName: "Democrats win Senate",
    type: "widen",
    currentSpread: 0.072,
    threshold: 0.05,
    timestamp: new Date(Date.now() - 18 * 60 * 1000).toISOString(),
    severity: "high"
  },
  {
    id: "7",
    marketName: "Biden wins 2024",
    type: "tighten",
    currentSpread: 0.041,
    threshold: 0.045,
    timestamp: new Date(Date.now() - 22 * 60 * 1000).toISOString(),
    severity: "medium"
  },
  {
    id: "8",
    marketName: "Trump wins 2024",
    type: "widen",
    currentSpread: 0.063,
    threshold: 0.05,
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    severity: "medium"
  }
];
