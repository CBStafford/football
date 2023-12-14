
import { useState } from "react"
import { useSearchParams } from 'next/navigation'


import { registerUsers } from "api"

export default function SubmitPicksForm({profileData}) {

    const searchParams = useSearchParams()

    // const [winner, setWinner] = useState('')
    const [V_score, setV_score] = useState([])
    const [h_score, setH_score] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [week, setWeek] = useState(searchParams.get('week'))

    const handleSubmit = async (e)  => {
        e.preventDefault()
        setIsLoading(true)

        alert("Submitted!!!!");
    
        console.log(V_score);
    
        // const res = await registerUsers(credentials); //nut

        // if (res.status === 200) {
        //   router.refresh()
        //   router.push('/login') 
        // }        
    }
   
    const score = profileData.filter((w)=> {
        return w.week == 1
    }); 

    const formItems = (index) => {
        // console.log(index)
        return(
            <h1>
                Pick {index} <br />
            </h1>
        );
    }


    return (
        <div>
            <h2>Week {week}</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="picksTable">
                    <table>
                        <thead>
                            <tr>
                            {score.map((item, index)=>(
                                // console.log(item),
                                <th className="scoresTableHeader" key={index}>
                                <label htmlFor="name" className="form-label">{item.visitor} </label>
                                <input 
                                    name={"visitor"+{index}}
                                    type="text" 
                                    className="form-control" 
                                    id="visitor" 
                                    onChange={(e) => setV_score(e.target.value)}
                                    // value={"visitor"+{index}}
                                />
                                
                                <br /> @ <br />
                                <label htmlFor="name" className="form-label"> {item.home}</label>
                                <input 
                                    name={"home"+{index}}
                                    type="text" 
                                    className="form-control" 
                                    id="home" 
                                    onChange={(e) => setH_score(e.target.value)}
                                    // value={"home"+{index}}
                                />
                                </th>
                            ))}
                            </tr>
                        </thead>
                    

                    </table>
                </div>
                <button type="submit" className="btn btn-primary submit">Submit</button>
            </form>

        </div>
    )
}