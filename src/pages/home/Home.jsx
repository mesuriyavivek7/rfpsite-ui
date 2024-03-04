import React from 'react'

//importing css
import './home.css'

//importing components
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

export default function Home() {
  return (
    <div>
       <Navbar></Navbar>
       <Header></Header>
    </div>
  )
}
