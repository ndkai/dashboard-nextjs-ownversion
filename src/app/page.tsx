import Image from "next/image";
import { lusitana } from './ui/fonts';
import React from 'react'
import AcmeLogo from "./ui/acme-logo";
import Link from "next/dist/client/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const Page = () => {
  return (
    <main className="bg-green">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo/>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal text-red-500`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={750}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"/>
      </div>
    </main>
  )
}

export default Page