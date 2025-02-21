import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo-2.png'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const HeaderDash = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  // Get user initials
  const initials = `${user?.given_name?.[0] || ''}${user?.family_name?.[0] || ''}`.toUpperCase() || 'U'

  return (
    <div className='flex justify-between items-center'>
      <Link href="/dashboard">
        <Image src={Logo} alt="Logo-Image" width={70} height={70} />
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar className='cursor-pointer'>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem className='cursor-pointer'>
            <Link 
              href='/api/auth/logout' 
              className='w-full text-red-600 hover:text-red-800'
            >
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default HeaderDash