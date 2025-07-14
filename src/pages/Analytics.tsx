import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Zap, Target } from "lucide-react";

const Analytics = () => {
  const edgeOpportunities = [
    {
      id: 1,
      market: "Biden wins 2024",
      type: "Arbitrage",
      edge: 3.2,
      confidence: "High",
      description: "Price discrepancy between platforms",
      timeframe: "2-4 hours",
    },
    {
      id: 2,
      market: "GOP controls Senate",
      type: "Momentum",
      edge: 1.8,
      confidence: "Medium",
      description: "Unusual volume spike detected",
      timeframe: "1-2 days",
    },
    {
      id: 3,
      market: "Inflation > 4% EOY",
      type: "Mean Reversion",
      edge: 2.5,
      confidence: "High",
      description: "Oversold condition identified",
      timeframe: "3-5 days",
    },
  ];

  const marketMetrics = [
    { label: "Markets Analyzed", value: "247", change: "+12" },
    { label: "Edge Opportunities", value: "18", change: "+3" },
    { label: "Avg Edge Size", value: "2.4%", change: "+0.3%" },
    { label: "Success Rate", value: "73%", change: "+5%" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Edge Analytics</h1>
          <p className="text-slate-400">Identify market inefficiencies and trading opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketMetrics.map((metric, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">{metric.label}</CardTitle>
                <BarChart3 className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <p className="text-xs text-green-400">{metric.change} this week</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Live Edge Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {edgeOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="border border-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-blue-500" />
                      <h3 className="text-white font-semibold">{opportunity.market}</h3>
                      <Badge 
                        variant="outline" 
                        className={`${
                          opportunity.type === "Arbitrage" ? "border-green-500 text-green-400" :
                          opportunity.type === "Momentum" ? "border-blue-500 text-blue-400" :
                          "border-purple-500 text-purple-400"
                        }`}
                      >
                        {opportunity.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-slate-400 text-sm">Edge</p>
                        <p className="text-green-500 font-bold">+{opportunity.edge}%</p>
                      </div>
                      <Badge 
                        variant="outline"
                        className={`${
                          opportunity.confidence === "High" ? "border-green-500 text-green-400" :
                          "border-yellow-500 text-yellow-400"
                        }`}
                      >
                        {opportunity.confidence}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-slate-400">{opportunity.description}</p>
                    <p className="text-blue-400">Expected timeframe: {opportunity.timeframe}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Edge Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Arbitrage</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <span className="text-white text-sm">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Momentum</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <span className="text-white text-sm">30%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Mean Reversion</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                    <span className="text-white text-sm">25%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Avg Edge Captured</span>
                  <span className="text-green-500 font-semibold">2.1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Hit Rate</span>
                  <span className="text-blue-500 font-semibold">73%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Avg Hold Time</span>
                  <span className="text-white">2.3 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Risk-Adjusted Return</span>
                  <span className="text-green-500 font-semibold">1.8x</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;