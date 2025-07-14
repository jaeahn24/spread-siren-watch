import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-slate-400">Overview of your trading activity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Total P&L</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">+$2,847</div>
              <p className="text-xs text-slate-400">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Active Positions</CardTitle>
              <Activity className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24</div>
              <p className="text-xs text-slate-400">Across 12 markets</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Win Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">68.2%</div>
              <p className="text-xs text-slate-400">+3.1% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Volume</CardTitle>
              <TrendingDown className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$45,231</div>
              <p className="text-xs text-slate-400">Last 24 hours</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Biden wins 2024</p>
                    <p className="text-sm text-slate-400">Bought 100 @ $0.62</p>
                  </div>
                  <span className="text-green-500">+$38</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">GOP controls House</p>
                    <p className="text-sm text-slate-400">Sold 50 @ $0.78</p>
                  </div>
                  <span className="text-red-500">-$12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Fed cuts rates Dec</p>
                    <p className="text-sm text-slate-400">Bought 200 @ $0.45</p>
                  </div>
                  <span className="text-green-500">+$90</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Climate bill passes</p>
                    <p className="text-sm text-slate-400">+45.2% return</p>
                  </div>
                  <span className="text-green-500">$456</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Unemployment &lt; 4%</p>
                    <p className="text-sm text-slate-400">+32.1% return</p>
                  </div>
                  <span className="text-green-500">$234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Oil prices &gt; $90</p>
                    <p className="text-sm text-slate-400">+28.7% return</p>
                  </div>
                  <span className="text-green-500">$189</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;