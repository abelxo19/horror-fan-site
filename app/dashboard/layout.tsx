import type { ReactNode } from "react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import Headerdash from "@/components/header_dash"
import { Sidebar } from "@/components/sidebar"
import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";

async function getData({
  email,
  id,
  firstName,
  lastName,
}: {
  email: string;
  id: string;
  firstName: string | undefined | null;
  lastName: string | undefined | null;
}) {
  noStore();
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    const name = `${firstName ?? ""} ${lastName ?? ""}`;
    await prisma.user.create({
      data: {
        id: id,
        email: email,
        name: name,
      },
    });
  }
}
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
  await getData({
    email: user.email as string,
    firstName: user.given_name as string,
    id: user.id as string,
    lastName: user.family_name as string,
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0907]">
  
      <div className="fixed top-0 left-0 right-0 z-30 bg-[#0b0907]">
        <div className="px-8">
          <Headerdash />
        </div>
        <hr className="border-[#242221]" />
      </div>

   
      <div className="flex flex-1 pt-[calc(64px+1rem)]">

        <Sidebar />

       
        <main className="flex-1 overflow-y-auto md:ml-[230px] ml-[50px]  pb-8 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  )
}

