import { clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {

  const { emailAddress } = await req.json();  

  // Initialize clerkClient
  const client = await clerkClient()
    const url = process.env.URL;
  // Use the `createInvitation()` method to create an invitation
  const invitation = await client.invitations.createInvitation({
    emailAddress,
    
    redirectUrl: `${url}/sign-up`,
  })

  return NextResponse.json({ message: 'Invitation created', invitation })
}