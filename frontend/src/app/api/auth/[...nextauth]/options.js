import { NextAuthOptions } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";
import { loginUsers } from "api"

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
              },

             authorize: async (credentials)=>{

              const res = await loginUsers(credentials)

              if (res.status === 200) {     
                const user = res.data.user
                console.log(res.message)
                console.log(res.data.user.name)  
                console.log(res.data.user.id)  
                console.log(res.data.Token)  

                return user 

              }else{
                return null
              }
            }

        })
    ],
    pages: {
        signIn: '/login',
      }
}