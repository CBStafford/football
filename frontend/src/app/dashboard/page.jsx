'use client'
import { useSession } from "next-auth/react"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { getProfile } from "../../../api";

import Profile from "@/components/profiles/listLeagues";
import PicksNScores from "@/components/profiles/picksNScores";
import PicksTab from "@/components/profiles/tabs";


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

  // console.log(profileRes);

  return(
    <div>
        <h2>Dashboard</h2>
        <Container >
          <Row >
            <Profile  leagues = {  profileRes } />
          </Row>
          {/* <Row>
            <div className="mt-3" >
              <div className="highlight"> You Picks </div>
              <PicksNScores picks={profileRes.scores } officialscores={profileRes.officialscores} />
            </div>
          </Row> */}
          <Row>
          <div className="mt-3" >
            <PicksTab  picks={profileRes.scores } officialscores={profileRes.officialscores}  />
          </div>  
          </Row>
        </Container>

    </div>
  )
}