import { signIn,signOut } from "next-auth/react"
import { useRouter } from "next/router"



export default function ScoreBoard(){
        const router=useRouter()
       
    return(
        <div className="w-full h-full flex flex-col">
       	<button onClick={() => signIn("google", { callbackUrl: `http://localhost:3000${router.route}` })} >ENTER SCORE BOARD GAME</button>
        <div>List</div>
        </div>
        )
}