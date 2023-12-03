
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
// import PicksNScores from "@/components/profiles/picksNScores";
import PicksTabItems from './tabItems';


export default function PicksTab({picks, officialscores}){

    const pScore = picks || [];
    const oScore = officialscores || [];

    const [tabID, setTabID] = useState(1);

    const toggleTab = (tabNo) =>{
        setTabID(tabNo);
    }

    // console.log(pScore);

    return(
        <div className="picksTabs">
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => toggleTab(1)  }>Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => toggleTab(2) }>Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={() => toggleTab(3) }>Tab 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" onClick={() => toggleTab(4) }>Tab 4</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <PicksTabItems picks={pScore} officialscores={oScore} week={tabID} />
            </div>
        </div>
    );

}