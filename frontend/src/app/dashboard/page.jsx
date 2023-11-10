'use client'
import { useSession } from "next-auth/react"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Component() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status !== "authenticated") {
        router.push("/")
        return
      }
  }, []);


console.log(session)

console.log(status)

  return(
    <>
        <h1>DashBoard!</h1>
    </>
  )
}