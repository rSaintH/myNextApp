import { inviteUser } from '../services/invitations' // <-- Importa aqui
 
async function handleInviteUser(formData: FormData){
    'use server'
    const emailAddress = formData.get("emailAddress") as string;
    const user = await inviteUser(emailAddress)
    if (user) {
        console.log(user)
    }

}

export default function Users(){
    return(
        <div>
            <h1>Usuários</h1>
            <form action={handleInviteUser}>
                <p>Email</p>
                <input placeholder='digite o email' type='string' name='emailAddress' className='border'></input>
                <button type="submit" className='border'>enviar</button>
            </form>
        </div>
    )
}