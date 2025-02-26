import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BellIcon as BrandTelegram, Car, Ghost, VideoIcon as Movie, Skull, Clapperboard } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { CarouselDemo} from '@/components/carousel-demo';
import { redirect } from 'next/navigation';


const DashboardPage = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (!user) {
    return redirect("/");
  }
  return (
    <div className='min-h-screen overflow-hidden'>
      <p className='text-4xl font-creeper text-white text-center pb-14'>Welcome to the Haunt <span
          style={{
            color: "transparent",
            WebkitTextStroke: "1px white",
          }}
        >
          Hub
        </span>{" "}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 shadow-md'>      
         <Card className="bg-transparent border-transparent pt-11">
            <CardHeader className="space-y-3">
              <CardTitle className="flex items-center gap-2 text-xl text-white">
                <BrandTelegram className="h-5 w-5 text-gray-400 hover:fill-white hover:text-white" />
                Join Our Coven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-400">Get exclusive horror content and movie recommendations on our Telegram channel</p>
              <Link href="https://t.me/HorrorMovies_Hub" passHref>
              <Button variant="outline" className="w-full pt-2 hover:bg-gray-300 hover:text-black">
                Join Telegram Channel
              </Button>
              </Link>
            </CardContent>
          </Card>
          <div>
            <p className='text-white ml-20 py-2 text-lg font-semibold flex'>Latest Releases <span className='inline px-2 text-gray-400 hover:fill-white hover:text-white'><Clapperboard /></span></p>
           <CarouselDemo />
          </div>
        </div>
    </div>
  );
};

export default DashboardPage;
