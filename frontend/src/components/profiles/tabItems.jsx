import Nav from 'react-bootstrap/Nav';
import PicksNScores from "@/components/profiles/picksNScores";

export default function PicksTabItems({picks, officialscores, week}){

    const pScore = picks || [];
    const oScore = officialscores || [];
    // console.log(pScore);

    // const


    return(
        <>
           <h1> {week} </h1>
           <PicksNScores picks={pScore } officialscores={oScore}  week={week} />
        </>
        

    );

}