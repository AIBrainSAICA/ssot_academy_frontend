"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Video, Brain, Trophy, Users, MessageSquare, BarChart2, Settings, LogOut, Star } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export default function DashboardNav() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Profile",
      icon: User,
      href: "/dashboard/profile",
    },
    {
      title: "Training Videos",
      icon: Video,
      href: "/dashboard/training",
    },
    {
      title: "AI Coach",
      icon: Brain,
      href: "/dashboard/ai-coach",
    },
    {
      title: "Leaderboard",
      icon: Trophy,
      href: "/dashboard/leaderboard",
    },
    {
      title: "Community",
      icon: Users,
      href: "/dashboard/community",
    },
    {
      title: "Coach Feedback",
      icon: MessageSquare,
      href: "/dashboard/feedback",
    },
    {
      title: "Analytics",
      icon: BarChart2,
      href: "/dashboard/analytics",
    },
  ]

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r">
      <SidebarHeader className="flex flex-col items-center justify-center py-4">
        <div className="flex items-center gap-2 px-2">
          <Star className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">Superstars</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/dashboard/settings">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <Link href="/">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
