import { useState } from 'react'

import './App.css'
import {Blog, Feedback, Header, Info, Topics,Footer} from "./sences";



function App() {


  return (
    <>
      <Header/>
      <Topics/>
      <Info/>
      <Blog/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default App
