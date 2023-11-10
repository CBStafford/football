'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function Login() {
    const router = useRouter()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const res = signIn("credentials", {
            ...data,
            redirect: true,
            callbackUrl: "/dashboard"
        })
    }

    return (
        <>
            <h1>Login!</h1>
            <div>
                <form onSubmit={loginUser}>
                    {/* <input name="csrfToken" type="hidden" defaultValue={token.value}/> */}
                    <label>
                        Email
                        <input 
                            name="email" id="email" type="email" value={data.email}
                            onChange={(e)=> { setData({...data, email:e.target.value}) }}
                        />
                    </label>
                    <br />
                    <label>
                        Password
                        <input name="password" id="password" type="password" onChange={(e)=> { setData({...data, password:e.target.value}) }}/>
                    </label>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}


