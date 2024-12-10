import React from 'react'
import { lusitana } from '../fonts'
const dollars = [
  "$6k",
  "$5k",
  "$4k",
  "$3k",
  "$2k",
  "$1k",
  ""
]

const revenue = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 200 },
  { name: "Jul", value: 250 },
  { name: "Aug", value: 100 },
  { name: "Jun", value: 50 },
  {name: "May", value: 30},
  {name: "Apr", value: 140},
  {name: "Nov", value: 160},
  {name: "Oct", value: 10},
  {name: "Dec", value: 200},
  {name: "Mar", value: 160},
  {name: "Sep", value: 180},
]
const DashboardChart = () => {
  return (
    <div className=' w-screen  flex flex-col items-start justify-start'>
      <p className={`${lusitana.className} mb-4 text-xl`
      }>Recent Revenue</p>
      <div className=' bg-white p-5 rounded-md w-full flex justify-between'>
        <div
          className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
          style={{ height: "300px" }}>
          {
            dollars.map((dollar, index) => {
              return <p key={index} className={`${lusitana.className} mb-4 text-md text-gray-500`}>{dollar}</p>
            })
          }
        </div>
        {
          revenue.map((r, index) => {
            return <div
            key={index}
              className=" h-full mb-6 hidden flex-col text-sm text-gray-400 sm:flex flex-end justify-end"
              style={{ height: "300px" }}>
              {
                <div className='justify-end'>
                  <div className={
                    `bg-blue-300 w-6 mb-[10px]`
                  } style={{height: `${r.value}px`}}></div>
                  <p className={`${lusitana.className} mb-4 text-md text-gray-500`}>{r.name}</p>
                </div>

              }
            </div>
          })
        }
        
      </div>
    </div>
  )
}

export default DashboardChart