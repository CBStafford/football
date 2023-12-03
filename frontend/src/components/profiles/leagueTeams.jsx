import Accordion from 'react-bootstrap/Accordion';



export default function LeagueTeams({lID, lTeams}) {

    
    const leagueTeams = lTeams;
    // console.log(leagueTeams);
    // console.log(team[index].league_id)

return(
    <div className="LeagueTeams">
        {leagueTeams.map((team, index)=>(
            team[index].league_id == lID ? 
            team.map((t, i)=> (
                <div key={i}>
                    {t.teamName } <sup>({t.owner})</sup>
                </div>
            ))
            :
            null
        ))}

      
    </div>
)


}