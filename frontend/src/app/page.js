import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {

  const session = await getServerSession(options)

  return (

    <div className="content">
      <div className="hero">
          <h1>Home Page</h1>
      </div>
      
      <div className="page-content">
        <h2>Page Content</h2>
        <p>
          {/* {session.user.name} <br />
          {session.user.email} */}
          {/* {process.env.LAR_TOKEN} */}
          
        </p>
      </div>
 
    </div>
  )
}
