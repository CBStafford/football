// "use client"
import Link from 'next/link'

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import NavLinks from "@/components/navLinks"

export default async function NavBar(){
    const session = await getServerSession(options)
   
    return(
        <>
            <div className='container-small header-logo'> 
                <strong>Simple Fantasy Football</strong>&nbsp;&nbsp; UR { session ? session.user.name : "not Logged In!"} &nbsp;
                <br/><b><Link href="/" >Home</Link></b>
            </div>
            <div className='container-small header-links'> 
                {!session ? 
                (
                    <Link href="/api/auth/signin" >Login</Link>
                )
                :
                (
                    <div>
                        <NavLinks />
                    </div>
                ) }
            </div>
        </>
    )
}