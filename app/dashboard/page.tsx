import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation';


const DashboardPage = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (!user) {
    return redirect("/");
  }
  return (
    <div>
       <Link href='/api/auth/logout'>
        <Button>Logout</Button>
      </Link>
      Welcome to the dashboard page
    </div>
  );
};

export default DashboardPage;
