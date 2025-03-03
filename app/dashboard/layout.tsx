import type { ReactNode } from "react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import Headerdash from "@/components/header_dash"
import { Sidebar } from "@/components/sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) {
    return redirect("/")
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0907]">
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-[#0b0907]">
        <div className="px-8">
          <Headerdash />
        </div>
        <hr className="border-[#242221]" />
      </div>

      {/* Content area with responsive sidebar and scrollable main */}
      <div className="flex flex-1 pt-[calc(64px+1rem)]">
        {/* Sidebar - now responsive */}
        <Sidebar />

        {/* Main content - scrollable with responsive margin */}
        <main className="flex-1 overflow-y-auto md:ml-[230px] ml-[60px] px-4 pb-8 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  )
}

