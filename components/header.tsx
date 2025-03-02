import Image from "next/image";
import Logo from "@/public/logo-2.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from "next/navigation"; 
import HorrorAudio from "@/components/audio";

const Header = async() => {
  
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (user) {
    redirect("/dashboard");
  }

  return (
    <header className="fixed top-0 left-0 w-full z-30 transition-all duration-300 mt-[-5px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4">
          <Link href="/">
            <Image src={Logo} alt="Logo-Image" width={70} height={70} />
          </Link>

          <div className="hidden md:flex items-center ml-44 ">
            <nav className="bg-[#232e44] text-base rounded-full px-8 py-3 flex items-center space-x-8 border border-gray-800">
              <Link href="/" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                Movies
              </Link>
              <Link href="#contact" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>  

          {!user ? (
            <div className="flex flex-row space-x-2">
              <Link href='/api/auth/register'>
                <Button size="lg" className="bg-black text-white md:mr-3 hover:bg-[#232e44]">Get Started</Button>
              </Link>
              <Link href='/api/auth/login'>
                <Button size="lg" className="bg-white text-black hover:bg-gray-300 hover:text-black">Login</Button>
              </Link>
              <HorrorAudio/>
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
