import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const DashboardPage = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (!user) {
    return <div>Please log in to access the dashboard.</div>
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
