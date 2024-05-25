import React from 'react'
import "./button.css"
function Button({name,hh}) {
  return (
    <div>
        <button className={hh}>{name}</button>
    </div>
  )
}

export default Button