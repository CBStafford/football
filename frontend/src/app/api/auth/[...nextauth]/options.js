import { NextAuthOptions } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";
import { loginUsers } from "api"

export const options = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
              },

             authorize: async (credentials)=>{

              const res = await loginUsers(credentials)

              console.log(res);

              if (res.status === 200) {     
                const user = res.data.user
                //TODO Remove these console logs. 
                console.log(res.message)
                console.log(res.data.user.name)  
                console.log(res.data.user.id)  
                console.log(res.data.Token)  
                // process.env.LAR_TOKEN = res.data.Token
                // process.env.LAR_USER = user
                return user 

              }else{
                return null
              }
            }

        })
    ],
    pages: {
        signIn: '/login',
      },
      // callbacks:{
      //   session({session, user}){
      //     session.user.id = user.id;
      //     return session;
      //   },
      // },

      secret: process.env.NEXTAUTH_SECRET,
      
}