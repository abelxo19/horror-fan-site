import { Button } from "./ui/button";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'
import { buttonVariants } from './ui/button'


const ShinyButton = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  return ( 
  <div className="">
      {user ? (
              <>
                <Link
                  href='/api/auth/logout'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign out
                  </Link> 
                  </> ) : (
                    <>
                    <Button size="lg" className="bg-black text-white">Get Started</Button>
                    <Button size="lg" className="bg-white text-black">Get Started</Button>

                    </>
                )}
  </div>
  );
};

export default ShinyButton;