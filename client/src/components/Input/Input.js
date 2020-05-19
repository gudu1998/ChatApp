import React from 'react'
import './Input.css'

export const Input = (props)=>(
  <form className="form">
      <input
       className="input"
       type="text"
       placeholder="Type a message..."
       value={props.message}
       onChange={ (e)=> props.setMessage(e.target.value) }
       onKeyPress = {(e)=> e.key === 'Enter' ? props.sendMessage(e):null}  
      />
      <button className="sendButton" onClick={(e)=>props.sendMessage(e)}>Send</button>
  </form>
)

