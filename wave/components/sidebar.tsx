"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"
import {
  BarChart3,
  Folders,
  Users,
  Settings,
  Calendar,
  LayoutDashboard,
} from "lucide-react"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { mockProjects } from "@/data/mock"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Projects",
    icon: Folders,
    href: "/projects",
    color: "text-violet-500",
  },
  {
    label: "Team",
    icon: Users,
    href: "/team",
    color: "text-pink-700",
  },
  {
    label: "Calendar",
    icon: Calendar,
    href: "/calendar",
    color: "text-orange-500",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">
            Wave
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={clsx(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={clsx("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3">
        <div className="space-y-1">
          <h2 className="text-xs uppercase text-zinc-400 font-semibold pl-4">
            Recent Projects
          </h2>
          <ScrollArea className="h-[300px]">
            {mockProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition text-zinc-400"
              >
                <div className="flex items-center gap-2 flex-1">
                  <div className={clsx(
                    "w-2 h-2 rounded-full",
                    project.status === "active" ? "bg-green-500" : 
                    project.status === "completed" ? "bg-blue-500" : "bg-yellow-500"
                  )} />
                  {project.name}
                </div>
              </Link>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
