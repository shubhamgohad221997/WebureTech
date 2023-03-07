import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing_Page = () => {
    const navigate=useNavigate()
  return (
    <div className='Homebtn'>
        <button onClick={()=>navigate("/task1")}>Task1</button>
        <button onClick={()=>navigate("/task2")}>Task2</button>
      
    </div>
  )
}

export default Landing_Page
