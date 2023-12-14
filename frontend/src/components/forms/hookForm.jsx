import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useSession } from "next-auth/react"

import { setPicks } from "api"


export default function DynamicForm({profileData}) {
    const { data: session, status } = useSession()
    // console.log(session)
    const { register, control, handleSubmit, setValue } = useForm({
        defaultValues: {
          formData: [{ key: '', value: '', game: '' }],
        },
      });


    const { fields, append, remove } = useFieldArray({
        control,
        name: 'formData',
      });
    
      const onSubmit = async (data) => {
        console.log(session);
        const acToken = session.accessToken
        userId = session.user.id

        const res = await setPicks(data, acToken, userId); //nut
        // console.log(acToken)
        if (res.status === 200) {
            
          router.refresh()
          router.push('/login') 
        } 
      };


      const score = profileData.filter((w)=> {
        return w.week == 1
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
                                {...register(`formData.${index}.key`)}
                                placeholder="Key"
                                value={field.key}
                                onChange={(e) => setValue(`formData.${index}.key`, e.target.value)}
                            />
                            <br /> @ <br /> 
                            <label htmlFor="name" className="form-label">{field.visitor} </label>
                            <input
                                {...register(`formData.${index}.value`)}
                                placeholder="Value"
                                value={field.value}
                                onChange={(e) => setValue(`formData.${index}.value`, e.target.value)}
                            />
                            <input
                                {...register(`formData.${index}.game`)}
                                placeholder="Game"
                                // value={field.game}
                                value={index === "" ? 1 : index +1}
                                onChange={(e) => setValue(`formData.${index}.value`, e.target.value)}
                                type='hidden'
                            />

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