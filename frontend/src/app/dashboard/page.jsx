'use client'
import { useSession } from "next-auth/react"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';

import { getProfile } from "../../../api";

import Profile from "@/components/profiles/listLeagues";


export default function Component() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const[profileRes, setProfileRes] = useState([])
 
  const DashboardProfile = async (e)  => {
    // console.log(session.user.id);
    var uuuuu = session.user.id
    const profile = await getProfile(uuuuu)

    setProfileRes(profile)
  }

  useEffect(() => {
    if (status !== "authenticated" && status !== "loading") {
        router.push("/")
        return
      }
    
     if(status === "authenticated"){
      DashboardProfile()
     } 
  }, [status]);  

  return(
    <div>
        <h2>Dashboard</h2>

        <Profile  leagues = {  profileRes } />



    </div>
  )
}