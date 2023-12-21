import React from 'react';
import { useState } from "react"
import { useForm, useFieldArray } from 'react-hook-form';
import { useSession } from "next-auth/react"
import { setPicks } from "api"


export default function DynamicForm({profileData, week}) {
    // const [week, setWeek] = useState(week)
    
    const { data: session, status } = useSession()
    // console.log(session)
    const { register, control, handleSubmit, setValue } = useForm({
        defaultValues: {
          formData: [{ v: '', h: ''}],
        },
      });


    const { fields, append, remove } = useFieldArray({
        control,
        name: 'formData',
      });
    
      const onSubmit = async (data) => {
        // console.log(data);
        const acToken = session.accessToken
        // const userName = session.user.name
        // const useremail = session.user.email
        const userId = session.user.id

        const res = await setPicks(data, acToken, userId, week); //nut
        // console.log(acToken)
        // if (res.status === 200) {
            
        //   router.refresh()
        //   router.push('/login') 
        // } 
      };


      const score = profileData.filter((w)=> {
        return w.week == week
    }); 

    // console.log(score);

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="picksTable">
            <table>
                <thead>
                    <tr>
                        {score.map((field, index) => (
                            <th className="scoresTableHeader" key={index}>

                            <label htmlFor="name" className="form-label">{field.visitor} </label>  
                            <input
                                {...register(`formData.${index}.v`)}
                                placeholder="Visitors"
                                value={field.v}
                                onChange={(e) => setValue(`formData.${index}.v`, e.target.value)}
                            />
                            <br /> @ <br /> 
                            <label htmlFor="name" className="form-label">{field.home} </label>
                            <input
                                {...register(`formData.${index}.h`)}
                                placeholder="Home"
                                value={field.h}
                                onChange={(e) => setValue(`formData.${index}.h`, e.target.value)}
                            />
                            {/* <input
                                {...register(`formData.${index}.game`)}
                                placeholder="Game"
                                value={field.index }
                                onChange={(e) => setValue(`formData.${index}.game`, e.target.value)}
                                type='hidden'
                            /> */}
                            {/* <input
                                {...register(`formData.${index}.week`)}
                                placeholder="week"
                                value={field.week}
                                onChange={(e) => setValue(`formData.${index}.week`, e.target.value)}
                                type='hidden'
                            /> */}

                            </th>
                        ))}
                </tr>
                    </thead>
            </table>
            </div>
          <button type="submit" className="btn btn-primary submit" >Submit</button>
        </form>
      );
}