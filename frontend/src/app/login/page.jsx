"use client"

import { useRouter } from "next/navigation"
import { useContext, useState, useEffect} from "react"

// import { loginStatusContext } from "../components/navbar"
import { loginStatusContext } from "src/app/components/navbar"

import Link from 'next/link'

import {loginUsers} from "@/app/api"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function loginUsersForm() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState()

  const [isLoggedIn, setIsLoggedIn] = useContext(loginStatusContext)

  // const logStatus = useContext(loginStatusContext)

  useEffect(()=>{
    console.log("!!!!! "+ isLoggedIn)
  })

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const credentials = { email, password}
    console.log(credentials)

    const res = await loginUsers(credentials)

    const updateLoggedStatus = ()=>{
      setIsLoggedIn("Iggy") 
    }

    if (res.status === 200) {     
      updateLoggedStatus()
      router.refresh()
      router.push('/') 
    }

  }

  return (
    <form onSubmit={handleSubmit} className="center">
    <Container fluid>
        <Row>
        <Col sm={6}> 
            <label>
                <span className="form-input-name">Email: </span> <br />
                <input
                required 
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
        </Col>     
        <Col sm={6}> 
            <label>
                <span className="form-input-name">Password: </span> <br />
                <input
                required
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>
        </Col>    
        </Row >    
        <Row className="center">
            <button 
                className="btn btn-primary center" 
                disabled={isLoading}
            >
            {isLoading && <span>Processing...</span>}
            {!isLoading && <span>Login</span>}
            </button>
        </Row>
        <Link href="/login/register">Sign Up!</Link>
    </Container>
    </form>
  )
}