'use client'

import { Show, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Header(){
    return(
        <header className="flex h-16 items-center justify-between bg-zinc-900 px-4 text-white">

            
            <div className="text-lg font-semibold">Dashboard de clientes</div>
            <Show when="signed-in">
            <nav className='text-white'>
              <ul>
                <li>
                  <Link href='/dashboard'>Dashboard</Link>
                </li>
              </ul>
            </nav>
            </Show>

            <div className="flex items-center gap-4">
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </header>
    )
}