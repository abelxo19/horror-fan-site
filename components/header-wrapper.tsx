import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import Header from "./header"

// Server component wrapper to handle authentication
const HeaderWrapper = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (user) {
    redirect("/dashboard")
  }

  return <Header user={user} />
}

export default HeaderWrapper

