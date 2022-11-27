import { signIn,signOut } from "next-auth/react"



export default function ScoreBoardTwo(){

    return(
        <div className="w-full h-full flex flex-col">
       	<button onClick={() => signOut("google", { callbackUrl: `http://localhost:3000/Game` })} >EXIT SCORE BOARD GAME</button>
        <div>List</div>
        </div>
        )
}