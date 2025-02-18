import Image from 'next/image'
import Logo from '@/public/logo-horror.png' 
import Link from 'next/link'
import ShinyButton from '@/components/shiny-button'

const header = () => {
  return (
    <header>
      <div className='container mx-auto'>
      <div className='flex justify-between items-center px-4 '>
        <Image src={Logo} alt='Logo-Image' width={65} height={65}></Image>
        <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-slate-900">Home</Link>
            <Link href="#features" className="text-gray-600 hover:text-slate-900">Features</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-slate-900">Pricing</Link>
            <Link href="#contact" className="text-gray-600 hover:text-slate-900">Contact</Link>
          </nav>
          <ShinyButton text="Get Started"></ShinyButton>
      </div>
      </div>
    </header>
  )
}

export default header
