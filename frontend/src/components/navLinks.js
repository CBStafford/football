"use client"
import Link from 'next/link'
import { signOut } from 'next-auth/react'

import { useRouter } from 'next/navigation'

export default function NavLinks(){
    const router = useRouter();

    const HandleClick = () => {
        console.log("Clicked!!!!!")
        signOut({ redirect: true, callbackUrl:"/"})
    }
 
    return(
        <div>
            <div>
                <Link href="/dashboard">Dashboard</Link> 
            </div>
            <div>
                <Link href="#"
                    onClick={HandleClick}
                >Logout</Link> 
            </div>
        </div>

    )
}


