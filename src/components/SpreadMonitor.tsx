
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

interface Market {
  id: string;
  name: string;
  bestBid: number;
  bestAsk: number;
  lastUpdate: string;
}

interface Alert {
  id: string;
  marketName: string;
  type: "widen" | "tighten";
  currentSpread: number;
  threshold: number;
  timestamp: string;
  severity: "low" | "medium" | "high";
}

interface SpreadMonitorProps {
  markets: Market[];
  alerts: Alert[];
}

const SpreadMonitor = ({ markets, alerts }: SpreadMonitorProps) => {
  const getSpread = (market: Market) => market.bestAsk - market.bestBid;
  const getSpreadPercentage = (market: Market) => 
    ((market.bestAsk - market.bestBid) / market.bestBid) * 100;

  const recentAlerts = alerts.slice(0, 5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Live Markets */}
      <div className="lg:col-span-2">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Live Market Spreads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {markets.map((market) => {
                const spread = getSpread(market);
                const spreadPct = getSpreadPercentage(market);
                const hasRecentAlert = alerts.some(alert => 
                  alert.marketName === market.name && 
                  new Date().getTime() - new Date(alert.timestamp).getTime() < 60000
                );

                return (
                  <div
                    key={market.id}
                    className={`p-4 rounded-lg border transition-all ${
                      hasRecentAlert 
                        ? 'border-orange-500 bg-orange-500/10' 
                        : 'border-slate-700 bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-white">{market.name}</h3>
                        {hasRecentAlert && (
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                        )}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${
                          spread > 0.05 
                            ? 'border-red-500 text-red-400' 
                            : 'border-green-500 text-green-400'
                        }`}
                      >
                        {spread > 0.05 ? 'Wide' : 'Tight'}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-slate-400">Best Bid</p>
                        <p className="text-white font-mono">${market.bestBid.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Best Ask</p>
                        <p className="text-white font-mono">${market.bestAsk.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Spread</p>
                        <p className="text-white font-mono">${spread.toFixed(3)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Spread %</p>
                        <p className="text-white font-mono">{spreadPct.toFixed(2)}%</p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <Progress 
                        value={Math.min((spread / 0.1) * 100, 100)} 
                        className="h-2 bg-slate-700"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts */}
      <div>
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg border ${
                    alert.severity === 'high' 
                      ? 'border-red-500 bg-red-500/10' 
                      : alert.severity === 'medium'
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-blue-500 bg-blue-500/10'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {alert.type === 'widen' ? (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    )}
                    <p className="text-sm font-medium text-white">
                      {alert.marketName}
                    </p>
                  </div>
                  
                  <p className="text-xs text-slate-300 mb-1">
                    Spread {alert.type === 'widen' ? 'widened' : 'tightened'} to ${alert.currentSpread.toFixed(3)}
                  </p>
                  
                  <p className="text-xs text-slate-400">
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpreadMonitor;
