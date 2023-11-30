import Accordion from 'react-bootstrap/Accordion';



export default function LeagueTeams({lID, lTeams}) {

    
    const leagueTeams = lTeams;
    // console.log(leagueTeams);
    // console.log(team[index].league_id)

return(
    <>
        {leagueTeams.map((team, index)=>(
            team[index].league_id == lID ? 
            team.map((t, i)=> (
                <div key={i}>
                    {t.teamName } <sub>({t.owner})</sub>
                </div>
            ))
            :
            null
        ))}

      
    </>
)


}