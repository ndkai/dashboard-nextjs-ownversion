import React from 'react'
import { lusitana } from '../fonts'
import { TvIcon } from '@heroicons/react/20/solid'

const invoices = [
  {name: "Duy", value: "300$", email: "duy@gmail.com"},
  {name: "Nguye", value: "200$", email: "duy@gmail.com"},
  {name: "Nam", value: "200$", email: "duy@gmail.com"},
  {name: "Quan", value: "200$", email: "duy@gmail.com"},
]

const LatestInvoices = () => {
  return (
    <div className='h-screen w-screen  flex flex-col items-start justify-start'>
      <p className={`${lusitana.className} mb-4 text-xl`
      }>Recent Revenue</p>
      <div className=' bg-white p-5 rounded-md w-full gap-3 flex flex-col'>


      {
        invoices.map((invoice, index) => {
         return <Invoice key={index} name={invoice.name} value={invoice.value} email={invoice.email}/>
        })
      }
     
      </div>
     
    </div>
  )
}

export default LatestInvoices

interface InvoiceProps {
  name: string
  value: string
  email: string
}

const Invoice = ({name, value, email}: InvoiceProps) => {  
  return (
    <div className='flex bg-white-400 w-full justify-between p-3 rounded-md shadow-md shadow-cyan-700'>
      <div className='flex items-center gap-2'>
      <TvIcon className='w-[30px] h-[30px]'/>
      <div>
      <p className='text-black font-bold'>{name}</p>
      <p className='text-black font-medium text-[14px]'>{email}</p>
      </div>
      </div>
      <div className='text-black font-bold text-[14px]'>{value}</div>
    </div>
  )
}

