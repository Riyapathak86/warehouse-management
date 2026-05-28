import React from 'react'
import { useState } from 'react'
const PainterDashboard = () => {
  const [ledger, setledger] = useState()
  const [input, setinput] = useState()
  


  return (
    <div className='bg-primary'
    style={{marginTop:"70px"}}>
        
       <input type="text"
       value={ledger}
      //  onChange={setledger=(e)=>e.target.value}
      onChange={(e)=>setledger(e.target.value)}
       />
       <button onClick={()=>setinput(ledger)}>clk me</button>
       <h1>{input}</h1>
        </div>
  )
}

export default PainterDashboard