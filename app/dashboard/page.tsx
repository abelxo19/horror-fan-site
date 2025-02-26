import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BellIcon as BrandTelegram, Ghost, VideoIcon as Movie, Skull } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';


const DashboardPage = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (!user) {
    return redirect("/");
  }
  return (
    <div className='min-h-screen overflow-hidden'>
      <p className='text-4xl font-creeper text-white text-center pb-14'>Welcome to the Haunt Hub</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md'>      
         <Card className="bg-transparent border-transparent">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl text-white">
                <BrandTelegram className="h-5 w-5 text-white" />
                Join Our Coven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-400">Get exclusive horror content and movie recommendations on our Telegram channel</p>
              <Link href="https://t.me/HorrorMovies_Hub" passHref>
              <Button variant="outline" className="w-full hover:bg-gray-300 hover:text-black">
                Join Telegram Channel
              </Button>
              </Link>
            </CardContent>
          </Card>
          <div>
           <p className='text-white'></p>
          </div>
        </div>
    </div>
  );
};

export default DashboardPage;
