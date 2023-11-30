
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

import LeagueTeams from './leagueTeams';

export default function Profile({leagues}) {

  const user = leagues?.user || [];
  const teams = leagues?.teams || [];
  const lteams = leagues?.lteams || [];
  // const scores = leagues?.scores || [];

  // console.log(lteams);

    return(
      <div>
        <Row>
          {teams.map((item, index) => (
            <div key={index}>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey={index} >
                <Accordion.Header>{item.leagueName} ({item.owner}) </Accordion.Header>
                <Accordion.Body> 
                  <LeagueTeams lID={item.leagueId} lTeams={lteams} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
          ))}
        </Row>

        {/* <Row>
            {scores.map((item, index) => (
              <Row key={index}>
                <h2> Your picks Week { item.week } Game {item.game} </h2>
                  Home Score: {item.h_score} Visitor Score: {item.v_score } <br />

                <hr />
              </Row>  
            ) )}
        </Row> */}
        

      </div>
    )
}