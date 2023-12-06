'use client'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

import PicksTab from "@/components/profiles/tabs";
import SubmitPicksForm from "@/components/forms/picks";

export default function AddPicks() {

const profile_Stuff = JSON.parse(localStorage.getItem('profileStuff'));
    
    return (
        <Container>
            <h1>Enter your predictions</h1>

           <Row className="mt-3">
                <SubmitPicksForm profileData={profile_Stuff.officialscores }/>
            </Row>
        </Container>
    )
}
