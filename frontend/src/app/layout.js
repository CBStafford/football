// 'use cleint'
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from 'next/font/google'
import './globals.css'
import Container from 'react-bootstrap/Container';

import AuthProvider from '../context/authProvider'

import NavBar from '@/components/navBar'

import Footer from "@/components/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AuthProvider>
          
          <NavBar/>
          <Container className='page-content'>
            {children}          
          </Container>
          <Footer />
          
        </AuthProvider>
      </body>
    </html>
  )
}
