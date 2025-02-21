import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';


const DashboardPage = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (!user) {
    return redirect("/");
  }
  return (
    <div>
      <h1 className='text-white'>Welcome to the dashboard page</h1>
    </div>
  );
};

export default DashboardPage;
