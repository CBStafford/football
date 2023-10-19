"use client"
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

import { Inter } from 'next/font/google'

import Navbar from './components/navbar'
import Footer from './components/footer'

import LeftSide from './components/sidebar/left-side'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  // useEffect(()=>{
  //   require('bootstrap/dist/js/bootstrap.bundle.min.js')
  // }, [])
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className="container">
          
        </div>
        
        <Footer />
      </body>
    </html>
  )
}
