'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

import SubmitPicksForm from "@/components/forms/picks";
import DynamicForm from "@/components/forms/hookForm";

export default function AddPicks() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [week, setWeek] = useState(searchParams.get('week'))

    const profile_Stuff = JSON.parse(localStorage.getItem('profileStuff'));
        if(!profile_Stuff){
            router.push("/")
            // console.log("No Session!!")
            return
        }    

    return (
        <Container>
           <h1>Enter your predictions for week {week} </h1>

           <Row className="mt-3">
                {/* <SubmitPicksForm profileData={profile_Stuff.officialscores }/> */}
                <DynamicForm  profileData={profile_Stuff.officialscores } week={week} />
            </Row>
        </Container>
    )
}
