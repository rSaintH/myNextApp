import { clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {

  const { emailAddress } = await req.json();  

  // Initialize clerkClient
  const client = await clerkClient()

  // Use the `createInvitation()` method to create an invitation
  const invitation = await client.invitations.createInvitation({
    emailAddress,
    redirectUrl: 'http://localhost:3000/sign-up',
  })

  return NextResponse.json({ message: 'Invitation created', invitation })
}