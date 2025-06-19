
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Search, TrendingUp, TrendingDown, Clock } from "lucide-react";

interface Alert {
  id: string;
  marketName: string;
  type: "widen" | "tighten";
  currentSpread: number;
  threshold: number;
  timestamp: string;
  severity: "low" | "medium" | "high";
}

interface AlertHistoryProps {
  alerts: Alert[];
}

const AlertHistory = ({ alerts }: AlertHistoryProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterSeverity, setFilterSeverity] = useState("all");

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.marketName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || alert.type === filterType;
    const matchesSeverity = filterSeverity === "all" || alert.severity === filterSeverity;
    
    return matchesSearch && matchesType && matchesSeverity;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 text-red-400';
      case 'medium': return 'border-orange-500 text-orange-400';
      case 'low': return 'border-blue-500 text-blue-400';
      default: return 'border-slate-500 text-slate-400';
    }
  };

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Alert History
        </CardTitle>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search markets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white"
            />
          </div>
          
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[140px] bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Alert Type" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="widen">Widen</SelectItem>
              <SelectItem value="tighten">Tighten</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterSeverity} onValueChange={setFilterSeverity}>
            <SelectTrigger className="w-[140px] bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem value="all">All Severity</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className="p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800/80 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {alert.type === 'widen' ? (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  ) : (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  )}
                  <h3 className="font-medium text-white">{alert.marketName}</h3>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className={
                    alert.type === 'widen' 
                      ? 'border-red-500 text-red-400' 
                      : 'border-green-500 text-green-400'
                  }>
                    {alert.type.toUpperCase()}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-slate-400">Current Spread</p>
                  <p className="text-white font-mono">${alert.currentSpread.toFixed(3)}</p>
                </div>
                <div>
                  <p className="text-slate-400">Threshold</p>
                  <p className="text-white font-mono">${alert.threshold.toFixed(3)}</p>
                </div>
                <div>
                  <p className="text-slate-400">Time</p>
                  <p className="text-white font-mono">
                    {new Date(alert.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {filteredAlerts.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              No alerts found matching your criteria.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertHistory;
