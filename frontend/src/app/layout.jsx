"use client"
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

import { useState, useContext} from "react"

import { Inter } from 'next/font/google'

import Navbar from './components/navbar'
import Footer from './components/footer'

// import LeftSide from './components/sidebar/left-side'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  // useEffect(()=>{
  //   require('bootstrap/dist/js/bootstrap.bundle.min.js')
  // }, [])

  // const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        <div className="grid-container">
          <div className="container-span-all header">   
            <Navbar />
          </div>
          <div className="container-span-all">
            {children}
          </div>
          
          <div className="container-span-all footer">
            <Footer />
          </div>
       </div>
      </body>
    </html>
  )
}
