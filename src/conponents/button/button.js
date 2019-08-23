import React from 'react'
import './style.css'
const Button =(props)=>(
    <button className='btn'>
        <span>{props.children}</span>
    </button>
)
export default Button;