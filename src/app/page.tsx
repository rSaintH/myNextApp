import { SignIn, SignUp, Show } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Habibi } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


async function handleLogin(){
  'use server'
  console.log("logado hehe")
}

const buttonStyle = "text-lg font-semibold text-center border py-1 px-1 rounded-md bg-zinc-200 border-zinc-500 min-w-60 max-w-80 min-h-10 max-h-15 text-3xl mb-5"



export default async function Home() {

  const { isAuthenticated } = await auth();

  if (isAuthenticated) {
  redirect("/dashboard");
}

  return (
   <div className="flex flex-col items-center justify-center mt-10">
    <Link className={buttonStyle} href="/sign-in">Entrar</Link>
    <Link className={buttonStyle} href="/sign-up">Criar sua conta</Link>
    
  </div>
  );
}
