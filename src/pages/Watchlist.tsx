import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, TrendingUp, TrendingDown, Plus } from "lucide-react";

const Watchlist = () => {
  const watchlistItems = [
    {
      id: 1,
      name: "Biden wins 2024",
      currentPrice: 0.62,
      change: +0.03,
      changePercent: +5.1,
      volume: 45231,
      highToday: 0.65,
      lowToday: 0.58,
    },
    {
      id: 2,
      name: "GOP controls House",
      currentPrice: 0.78,
      change: -0.02,
      changePercent: -2.5,
      volume: 32145,
      highToday: 0.81,
      lowToday: 0.76,
    },
    {
      id: 3,
      name: "Fed cuts rates Dec",
      currentPrice: 0.45,
      change: +0.07,
      changePercent: +18.4,
      volume: 67890,
      highToday: 0.47,
      lowToday: 0.38,
    },
    {
      id: 4,
      name: "Inflation < 3% by EOY",
      currentPrice: 0.34,
      change: +0.01,
      changePercent: +3.0,
      volume: 23456,
      highToday: 0.36,
      lowToday: 0.32,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Watchlist</h1>
            <p className="text-slate-400">Track your favorite markets</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Market
          </Button>
        </div>

        <div className="grid gap-4">
          {watchlistItems.map((item) => (
            <Card key={item.id} className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Eye className="w-5 h-5 text-slate-400" />
                    <div>
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-slate-400 text-sm">Volume: {item.volume.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-slate-400 text-sm">Current Price</p>
                      <p className="text-white text-lg font-bold">${item.currentPrice.toFixed(2)}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-slate-400 text-sm">24h Change</p>
                      <div className="flex items-center gap-1">
                        {item.change > 0 ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={item.change > 0 ? "text-green-500" : "text-red-500"}>
                          {item.change > 0 ? "+" : ""}{item.change.toFixed(3)} ({item.changePercent > 0 ? "+" : ""}{item.changePercent.toFixed(1)}%)
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-slate-400 text-sm">High / Low</p>
                      <p className="text-white">
                        ${item.highToday.toFixed(2)} / ${item.lowToday.toFixed(2)}
                      </p>
                    </div>

                    <Badge 
                      variant="outline" 
                      className={`${
                        item.changePercent > 10 ? "border-green-500 text-green-400" :
                        item.changePercent > 0 ? "border-blue-500 text-blue-400" :
                        "border-red-500 text-red-400"
                      }`}
                    >
                      {item.changePercent > 10 ? "Hot" : 
                       item.changePercent > 0 ? "Up" : "Down"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;