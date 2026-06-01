
import { auth } from "@clerk/nextjs/server";
import { userInfo } from "os";
export default async function Home(){
    const { isAuthenticated, userId } = await auth();

    if (!isAuthenticated){
        return (
            <div className="h-center justify-items-center mx-20 text-3xl">Você não está logado</div>
        )
    }

    return(
        <div className="text-center">
        
        <h1>id do usuario: {userId}</h1>

        </div>
    )
}