import { BanknotesIcon, ClockIcon, InboxIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { lusitana } from '../fonts'

const iconMap = {
    collected: BanknotesIcon,
    custormers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon
}
const CardWrappper = () => {
  return (
    <div className='flex justify-between gap-4'>
        <Card title='Duy' value={100} type='invoices'/>
        <Card title='Duy' value={100} type='invoices'/>
        <Card title='Duy' value={100} type='invoices'/>
        <Card title='Duy' value={100} type='invoices'/>
    </div>
  )
}

export default CardWrappper

export function Card({
    title,
    value,
    type
}: {
    title: string;
    value: number;
    type: 'invoices' | 'customers' | 'pending'|'collected'
}){
    return (
        <div className='bg-gray-400 w-full rounded-md  flex flex-col justify-center items-center p-2 shadow-lg'>
        <div className='flex items-center p-4 justify-center '>
            <BanknotesIcon className='w-5 h-5'/>
            <p className='pl-3'>Collected</p>
        </div>
        <p className={`${lusitana.className} bg-white p-4 text-center w-full rounded-md text-black`}>200 dola</p>
        </div>
    )

}