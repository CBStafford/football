"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import {registerUsers} from "@/app/api"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function registerNewUsersForm() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const credentials = {name, email, password, password_confirmation}
    console.log(credentials)

    const res = await registerUsers(credentials)

    if (res.status === 200) {
      router.refresh()
      router.push('/login') 
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="center">
    <Container fluid>
        <Row>
        <Col sm={4}> 
            <label>
                <span className="form-input-name">Name: </span> <br />
                <input
                required 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            </label>
        </Col>    
        <Col sm={4}> 
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
        <Col sm={4}> 
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
        <Col sm={4}> 
            <label>
                <span className="form-input-name">PConfirm Password: </span> <br />
                <input
                required
                type="text"
                onChange={(e) => setPassword_confirmation(e.target.value)}
                value={password_confirmation}
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
    </Container>
    </form>
  )
}