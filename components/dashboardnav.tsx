"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./usernav";

export function DashboardNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-accent hover:text-black hover:text-accent-foreground",
              pathname === item.href ? "bg-[#252321]" : "bg-transparent"
            )}
          >
            <item.icon className="mr-2 h-4 w-4 text-gray-400" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}