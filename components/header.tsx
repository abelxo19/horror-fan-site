import Image from "next/image";
import Logo from "@/public/logo-2.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from "next/navigation"; 

const Header = async() => {
  
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (user) {
    redirect("/dashboard");
  }

  return (
    <header className="fixed top-0 left-0 w-full z-30 transition-all duration-300 backdrop-blur-sm mt-[-5px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4">
          <Link href="/">
            <Image src={Logo} alt="Logo-Image" width={70} height={70} />
          </Link>

          <nav className="hidden md:flex space-x-4 text-lg font-medium ml-36">
            <Link href="/" className="text-white hover:text-black">Home</Link>
            <Link href="#features" className="text-white hover:text-black">Features</Link>
            <Link href="#pricing" className="text-white hover:text-black">Movies</Link>
            <Link href="#contact" className="text-white hover:text-black">Contact</Link>
          </nav>

          {/* Show Get Started and Login buttons only if no user exists */}
          {!user ? (
            <div>
              <Link href='/api/auth/register'>
                <Button size="lg" className="bg-black text-white mr-4 hover:bg-[#232e44]">Get Started</Button>
              </Link>
              <Link href='/api/auth/login'>
                <Button size="lg" className="bg-white text-black hover:bg-gray-300 hover:text-black">Login</Button>
              </Link>
            </div>
          ) : (
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 text-white">Go to Dashboard</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
