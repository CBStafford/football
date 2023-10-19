"use client"
import Link from 'next/link'
import context from 'react-bootstrap/esm/AccordionContext'

import { createContext,useContext, useState } from "react"
// import { loggedContext } from '../context/context'

export const loginStatusContext = createContext("Test")

export default function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState("Gronk")


    return(
        <>
            <div className='container-small header-logo'> 
                <strong>Simple Fantasy Football</strong>&nbsp;&nbsp; UR logged &nbsp;<b>{isLoggedIn}</b> !
            </div>
            <loginStatusContext.Provider value={[isLoggedIn, setIsLoggedIn]} >
            <div className='container-small header-links'> 
                
                {/* <loginStatusContext.Provider value={isLoggedIn} > */}
                <Link href="/login" >Login</Link> &nbsp;
                <Link href="/login">Logout</Link> 
                
            </div>
            </loginStatusContext.Provider>
        </>
    )
}