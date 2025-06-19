
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Settings, Bell, Save, Plus, Trash2 } from "lucide-react";

const AlertSettings = () => {
  const [globalSettings, setGlobalSettings] = useState({
    enableAlerts: true,
    soundEnabled: true,
    emailNotifications: false,
    defaultThresholdCents: 5,
    defaultThresholdPercent: 2.5
  });

  const [customRules, setCustomRules] = useState([
    {
      id: 1,
      marketPattern: "Biden wins*",
      thresholdCents: 3,
      thresholdPercent: 1.5,
      alertType: "both" as const,
      enabled: true
    },
    {
      id: 2,
      marketPattern: "2024 Election*",
      thresholdCents: 8,
      thresholdPercent: 3.0,
      alertType: "widen" as const,
      enabled: true
    }
  ]);

  const addNewRule = () => {
    const newRule = {
      id: Date.now(),
      marketPattern: "",
      thresholdCents: globalSettings.defaultThresholdCents,
      thresholdPercent: globalSettings.defaultThresholdPercent,
      alertType: "both" as const,
      enabled: true
    };
    setCustomRules([...customRules, newRule]);
  };

  const removeRule = (id: number) => {
    setCustomRules(customRules.filter(rule => rule.id !== id));
  };

  const updateRule = (id: number, updates: Partial<typeof customRules[0]>) => {
    setCustomRules(customRules.map(rule => 
      rule.id === id ? { ...rule, ...updates } : rule
    ));
  };

  return (
    <div className="space-y-6">
      {/* Global Settings */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Global Alert Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-white">Enable Alerts</Label>
                <Switch
                  checked={globalSettings.enableAlerts}
                  onCheckedChange={(checked) => 
                    setGlobalSettings(prev => ({ ...prev, enableAlerts: checked }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label className="text-white">Sound Notifications</Label>
                <Switch
                  checked={globalSettings.soundEnabled}
                  onCheckedChange={(checked) => 
                    setGlobalSettings(prev => ({ ...prev, soundEnabled: checked }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label className="text-white">Email Notifications</Label>
                <Switch
                  checked={globalSettings.emailNotifications}
                  onCheckedChange={(checked) => 
                    setGlobalSettings(prev => ({ ...prev, emailNotifications: checked }))
                  }
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-white">Default Threshold (Cents)</Label>
                <Input
                  type="number"
                  value={globalSettings.defaultThresholdCents}
                  onChange={(e) => 
                    setGlobalSettings(prev => ({ 
                      ...prev, 
                      defaultThresholdCents: Number(e.target.value) 
                    }))
                  }
                  className="mt-1 bg-slate-800 border-slate-700 text-white"
                />
              </div>
              
              <div>
                <Label className="text-white">Default Threshold (%)</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={globalSettings.defaultThresholdPercent}
                  onChange={(e) => 
                    setGlobalSettings(prev => ({ 
                      ...prev, 
                      defaultThresholdPercent: Number(e.target.value) 
                    }))
                  }
                  className="mt-1 bg-slate-800 border-slate-700 text-white"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Rules */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Custom Alert Rules
            </CardTitle>
            <Button onClick={addNewRule} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Rule
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customRules.map((rule) => (
              <div key={rule.id} className="p-4 border border-slate-700 rounded-lg bg-slate-800/50">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                  <div>
                    <Label className="text-white">Market Pattern</Label>
                    <Input
                      value={rule.marketPattern}
                      onChange={(e) => updateRule(rule.id, { marketPattern: e.target.value })}
                      placeholder="e.g., Biden wins*"
                      className="mt-1 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white">Cents</Label>
                    <Input
                      type="number"
                      value={rule.thresholdCents}
                      onChange={(e) => updateRule(rule.id, { thresholdCents: Number(e.target.value) })}
                      className="mt-1 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white">Percent</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={rule.thresholdPercent}
                      onChange={(e) => updateRule(rule.id, { thresholdPercent: Number(e.target.value) })}
                      className="mt-1 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white">Alert Type</Label>
                    <Select 
                      value={rule.alertType} 
                      onValueChange={(value: "both" | "widen" | "tighten") => 
                        updateRule(rule.id, { alertType: value })
                      }
                    >
                      <SelectTrigger className="mt-1 bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="both">Both</SelectItem>
                        <SelectItem value="widen">Widen Only</SelectItem>
                        <SelectItem value="tighten">Tighten Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={rule.enabled}
                      onCheckedChange={(checked) => updateRule(rule.id, { enabled: checked })}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeRule(rule.id)}
                      className="border-red-500 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertSettings;
