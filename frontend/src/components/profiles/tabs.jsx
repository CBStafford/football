
import { useState, useEffect } from 'react';
import Link from 'next/link'

import Nav from 'react-bootstrap/Nav';
import PicksTabItems from './tabItems';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function PicksTab({picks, officialscores}){

    const pScore = picks || [];
    const oScore = officialscores || [];

    const [tabID, setTabID] = useState(1);
    const [addPicksAddress , setAddPicksAddress] = useState("");

    const toggleTab = (tabNo) =>{
        setTabID(tabNo);
    }

    useEffect(() => {
        setAddPicksAddress("/addpicks?week=" + tabID)
      }, [tabID]); 

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
            
            <Row className="mt-3">
            <Button>
                <Link href={addPicksAddress} style={{color : 'white'}} >Make your picks</Link>
            </Button>
          </Row>
        </div>
    );

}