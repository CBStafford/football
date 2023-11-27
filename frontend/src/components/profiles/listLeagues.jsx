
import Container from 'react-bootstrap/Container';
import { useEffect } from "react"

export default function Profile(leagues) {

  // console.log(leagues.leagues.teams);

  useEffect(() => {

    console.log(leagues.leagues.teams);

    const user = leagues.leagues.user;
    const teams = leagues.leagues.teams;
    const scores = leagues.leagues.scores;
    
  }, [leagues]);


  // console.log(teams);

    return(
      <Container fluid className="page-content" >
        {/* {teams.map((item, index) => (
          <div key={index}>
            <h2>{item.leagueName}</h2> 
            <strong>{item.teamName}</strong> {item.owner}<br /> 
            <hr />
          </div>
        ))} */}

      </Container>
    )
}