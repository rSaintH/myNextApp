'use client'

import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function Header(){

    const { user, isLoaded, isSignedIn} = useUser();

    const nome = user?.firstName || user?.lastName || user?.username 

    return(
        
        <header className="flex h-16 items-center justify-between bg-zinc-900 px-4 text-white">
            

            
            <div className="text-lg font-semibold">Dashboard de clientes</div>
            
            <nav className='text-white'>
              <ul>
                <li>
                  <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li>
                  <Link href='users'>Usuários</Link>
                </li>
              </ul>
            </nav>
            

            <div className="flex items-center gap-4">
             {nome}
                <UserButton />
              
            </div>
            
          </header>
          
    )
}