
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Profile({leagues}) {

  const user = leagues?.user || [];
  const teams = leagues?.teams || [];
  const scores = leagues?.scores || [];

  console.log(leagues);

    return(
      <div>
        <Row>
          {teams.map((item, index) => (
            <div key={index}>
              <h2>{item.leagueName}</h2> 
              <strong>{item.teamName}</strong> {item.owner}<br /> 
              
              <hr />
            </div>
          ))}
        </Row>

        <Row>
            {scores.map((item, index) => (
              <Row key={index}>
                <h2> Your picks Week { item.week } Game {item.game} </h2>
                  Home Score: {item.h_score} Visitor Score: {item.v_score } <br />

                <hr />
              </Row>  
            ) )}
        </Row>
        

      </div>
    )
}