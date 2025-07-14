import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Eye, TrendingUp, Bell, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Watchlist", url: "/watchlist", icon: Eye },
  { title: "Edge Analytics", url: "/analytics", icon: TrendingUp },
  { title: "Alerts", url: "/alerts", icon: Bell },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavCls = (active: boolean) =>
    `w-full h-12 flex items-center justify-center ${
      active 
        ? "bg-blue-600 text-white" 
        : "text-slate-400 hover:text-white hover:bg-slate-800"
    }`;

  return (
    <Sidebar className="w-16 border-r border-slate-800" collapsible="none">
      <SidebarContent className="bg-slate-900">
        <div className="p-2 border-b border-slate-800">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
        </div>
        
        <SidebarMenu className="px-2 py-4 space-y-2">
          {navigation.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <NavLink 
                  to={item.url} 
                  end={item.url === "/"}
                  className={getNavCls(isActive(item.url))}
                >
                  <item.icon className="w-5 h-5" />
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}