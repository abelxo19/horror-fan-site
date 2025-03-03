"use client"

import * as React from "react"
import { ChevronLeft, Menu, Home, Clapperboard, Tv, BookMarked } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

type SidebarProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

export function Sidebar({ className, ...props }: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
        setMobileOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed md:hidden z-40 bottom-4 right-4 bg-[#1a1918] p-3 rounded-full shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      <div
        className={cn(
          "fixed h-[calc(100vh-64px)] bg-[#0b0907] transition-all duration-300 z-30",
          collapsed ? "w-[60px]" : "w-[230px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className
        )}
        {...props}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-end p-2">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden md:flex h-8 w-8 items-center justify-center rounded-md hover:bg-[#242221]"
            >
              <ChevronLeft className={cn("h-4 w-4 text-gray-400 transition-transform", collapsed && "rotate-180")} />
            </button>
          </div>

          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-2">
              <NavItem icon={<Home />} label="Home" href="/dashboard" collapsed={collapsed} />
              <NavItem icon={<Clapperboard />} label="Top Movies" href="/dashboard/topmovies" collapsed={collapsed} />
              <NavItem icon={<Tv />} label="Best Series" href="/dashboard/bestseries" collapsed={collapsed} />
              <NavItem icon={<BookMarked />} label="Fan Fiction" href="/dashboard/fanfiction" collapsed={collapsed} />
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

type NavItemProps = {
  icon: React.ReactNode
  label: string
  href: string
  collapsed: boolean
}

function NavItem({ icon, label, href, collapsed }: NavItemProps) {
    const pathname = usePathname()
  
    // Ensure "Home" is only active on /dashboard, not on its subpaths
    const isActive = pathname === href || (href !== "/dashboard" && pathname.startsWith(href + "/"))
  
    return (
      <li>
        <Link
          href={href}
          className={cn(
            "flex items-center text-sm font-medium rounded-md p-2 text-gray-300 hover:bg-[#242221] hover:text-white transition",
            collapsed ? "justify-center" : "justify-start",
            isActive ? "bg-[#252321] text-white" : "bg-transparent"
          )}
        >
          <span className="h-5 w-5">{icon}</span>
          {!collapsed && <span className="ml-3">{label}</span>}
        </Link>
      </li>
    )
  }
  