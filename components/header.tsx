import Image from "next/image";
import Logo from "@/public/logo-2.png";
import Link from "next/link";
import ShinyButton from "@/components/shiny-button";



const Header = () => {
  

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 ">
          <Link href="/">
            <Image src={Logo} alt="Logo-Image" width={70} height={70} />
          </Link>
          <nav className="hidden md:flex space-x-4 text-lg font-medium">  
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
          <ShinyButton/>
        </div>
      </div>
    </header>
  );
};

export default Header;
