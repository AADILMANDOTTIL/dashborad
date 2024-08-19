import { useState ,useEffect, useContext  } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import AddCategory from './components/addCategory'
import Addwidget from './components/Addwidget'
import { StoreContext } from './context/StoreContext'

function App() {
  const{ShowLogin,ShowLogin2}=useContext(StoreContext)
  







  // console.log(detail);

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   SetDetail((prev) => {
  //     return { ...prev, [name]: value }
  //   })
  // }

  // const handlesubmit = (e) => {
  //   e.preventDefault()
  //   // console.log(detail);
  //   setdata(detail)

  // }


  return (
    <>
      <Navbar  />
      {ShowLogin ? <AddCategory   /> : <></>}
      {ShowLogin2 ? <Addwidget   /> : <></>}
      <Hero    />


    </>


  )
}

export default App
