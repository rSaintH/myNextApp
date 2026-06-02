// import { inviteUser } from '../services/invitations' // <-- Importa aqui
import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs/server";


async function handleInviteUser(formData: FormData){
    'use server'
    const emailAddress = formData.get("emailAddress") as string;
    

    const url = process.env.URL;
    const response = await fetch(`${url}/api/invitations`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( emailAddress )
    })

    if (!response.ok) {
        throw new Error("Falha ao enviar convite");
    }

    return response.json()
}

export default async function Users(){
    const isAuthenticated = await auth();
    if (!isAuthenticated) {
        redirect("/sign-in")
    }
    const client = await clerkClient();
    const { data:users } = await client.users.getUserList();
    return(
        <div>
            <h1>Usuários</h1>
            <form action={handleInviteUser}>
                <p>Email</p>
                <input placeholder='digite o email' type='string' name='emailAddress' className='border'></input>
                <button type="submit" className='border'>enviar</button>
            </form>
                                <div>
                                    {users.map((user) => (
                                    <div key={user.id}>
                                    {user.firstName} {user.lastName} -{" "}
                                    {user.emailAddresses[0]?.emailAddress}
                                    </div>
      ))}
                                </div>
        </div>           
        
    )
}