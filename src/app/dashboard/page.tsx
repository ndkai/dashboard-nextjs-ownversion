import React from 'react'
import Layout from './layout'
import { lusitana } from '../ui/fonts'
import CardWrappper from '../ui/dashboard/card-wrapper'
import DashboardChart from '../ui/dashboard/dashboard-chart'
import LatestInvoices from '../ui/dashboard/latest-invoices'

const Page = () => {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 md:text-2xl`}>Dashboard</h1>
      <div>
        <CardWrappper />
        <div className='flex flex-col lg:flex-row justify-between p-3 gap-3'>
          <DashboardChart />
          <LatestInvoices />
        </div>
      </div>
    </main>
  )
}

export default Page