
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpreadMonitor from "./SpreadMonitor";
import AlertSettings from "./AlertSettings";
import AlertHistory from "./AlertHistory";
import { mockAlerts, mockMarkets } from "@/lib/mockData";
import { AlertTriangle, TrendingUp, TrendingDown, Settings } from "lucide-react";

const AlertDashboard = () => {
  const [alerts, setAlerts] = useState(mockAlerts);
  const [markets, setMarkets] = useState(mockMarkets);
  const [activeAlerts, setActiveAlerts] = useState(0);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Update market spreads randomly
      setMarkets(prev => prev.map(market => ({
        ...market,
        bestBid: Number((market.bestBid + (Math.random() - 0.5) * 0.02).toFixed(2)),
        bestAsk: Number((market.bestAsk + (Math.random() - 0.5) * 0.02).toFixed(2)),
        lastUpdate: new Date().toISOString()
      })));

      // Occasionally add new alerts
      if (Math.random() < 0.1) {
        const newAlert = {
          id: Date.now().toString(),
          marketName: "Biden wins 2024",
          type: Math.random() > 0.5 ? "widen" as const : "tighten" as const,
          currentSpread: Number((Math.random() * 0.1 + 0.01).toFixed(3)),
          threshold: 0.05,
          timestamp: new Date().toISOString(),
          severity: Math.random() > 0.7 ? "high" as const : "medium" as const
        };
        
        setAlerts(prev => [newAlert, ...prev.slice(0, 19)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveAlerts(alerts.filter(alert => 
      new Date().getTime() - new Date(alert.timestamp).getTime() < 300000 // 5 minutes
    ).length);
  }, [alerts]);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Verso
            </h1>
            <p className="text-slate-400 mt-1">Real-time spread monitoring for traders</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-green-500 text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live
            </Badge>
            <Badge variant="outline" className="border-orange-500 text-orange-400">
              {activeAlerts} Active Alerts
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold text-white">{activeAlerts}</p>
                  <p className="text-sm text-slate-400">Active Alerts</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-white">{markets.length}</p>
                  <p className="text-sm text-slate-400">Markets Tracked</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-8 h-8 text-red-500" />
                <div>
                  <p className="text-2xl font-bold text-white">
                    {alerts.filter(a => a.type === 'widen').length}
                  </p>
                  <p className="text-sm text-slate-400">Spread Widens</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Settings className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-white">
                    {alerts.filter(a => a.type === 'tighten').length}
                  </p>
                  <p className="text-sm text-slate-400">Spread Tightens</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="monitor" className="space-y-6">
          <TabsList className="bg-slate-900 border-slate-800">
            <TabsTrigger value="monitor" className="data-[state=active]:bg-slate-800">
              Live Monitor
            </TabsTrigger>
            <TabsTrigger value="alerts" className="data-[state=active]:bg-slate-800">
              Alert History
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-slate-800">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monitor">
            <SpreadMonitor markets={markets} alerts={alerts} />
          </TabsContent>

          <TabsContent value="alerts">
            <AlertHistory alerts={alerts} />
          </TabsContent>

          <TabsContent value="settings">
            <AlertSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AlertDashboard;
