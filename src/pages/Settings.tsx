import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, User, Bell, Shield, Palette } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-slate-400">Manage your account and application preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-slate-900 border-slate-800">
            <TabsTrigger value="profile" className="data-[state=active]:bg-slate-800">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-slate-800">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-slate-800">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-slate-800">
              <Palette className="w-4 h-4 mr-2" />
              Appearance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-slate-400">First Name</Label>
                    <Input 
                      defaultValue="John" 
                      className="mt-1 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-400">Last Name</Label>
                    <Input 
                      defaultValue="Doe" 
                      className="mt-1 bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-slate-400">Email</Label>
                  <Input 
                    defaultValue="john.doe@example.com" 
                    className="mt-1 bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <Label className="text-slate-400">Trading Experience</Label>
                  <Input 
                    defaultValue="3 years" 
                    className="mt-1 bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-slate-400 text-sm">Receive email alerts for important events</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Push Notifications</p>
                    <p className="text-slate-400 text-sm">Get real-time alerts in your browser</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Spread Alerts</p>
                    <p className="text-slate-400 text-sm">Notify when spreads widen or tighten</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Market Updates</p>
                    <p className="text-slate-400 text-sm">Daily summary of market activity</p>
                  </div>
                  <Switch />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-slate-400">Current Password</Label>
                  <Input 
                    type="password" 
                    className="mt-1 bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <Label className="text-slate-400">New Password</Label>
                  <Input 
                    type="password" 
                    className="mt-1 bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div>
                  <Label className="text-slate-400">Confirm New Password</Label>
                  <Input 
                    type="password" 
                    className="mt-1 bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white font-medium">Two-Factor Authentication</p>
                      <p className="text-slate-400 text-sm">Add an extra layer of security</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Update Security
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Appearance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Dark Mode</p>
                    <p className="text-slate-400 text-sm">Use dark theme for better visibility</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Compact View</p>
                    <p className="text-slate-400 text-sm">Show more data in less space</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Animations</p>
                    <p className="text-slate-400 text-sm">Enable smooth transitions and effects</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Save Appearance
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;