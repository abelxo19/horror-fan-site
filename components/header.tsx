import Image from "next/image";
import Logo from "@/public/logo-2.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Header = async() => {
  
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 ">
          <Link href="/">
            <Image src={Logo} alt="Logo-Image" width={70} height={70} />
          </Link>
          <nav className="hidden md:flex space-x-4 text-lg font-medium ml-36">  
            <Link href="/" className="text-white hover:text-black">
              Home
            </Link>
            <Link href="#features" className="text-white hover:text-black">
              Features
            </Link>
            <Link href="#pricing" className="text-white hover:text-black">
              Movies
            </Link>
            <Link href="#contact" className="text-white hover:text-black">
              Contact
            </Link>
          </nav>
          {user ? (
              <>
                <Link
                  href='/api/auth/logout'>
                 <Button>Signout</Button>
                  </Link> 
                  </> ) : (
                    <>
                    <div>
                    <Link href='/api/auth/register'>
                    <Button size="lg" className="bg-black text-white mr-4">Get Started</Button>
                    </Link>
                    <Link href='/api/auth/login'>
                    <Button size="lg" className="bg-white text-black hover:bg-gray-300 hover:text-black">Login</Button>
                    </Link>
                    </div>
                    </>
                )}
        </div>
      </div>
    </header>
  );
};

export default Header;
