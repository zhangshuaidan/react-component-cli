import React from 'react'
import './style.css'
import less from './index.less';
// console.log('less',less)
const Button =(props)=>{
    console.log('style',less)
    return (
        <button className='btn'>
        <span >{props.children}</span>
        <div className={less.outer}>外层
            <div className={less.inner}>内层</div>
        </div>
    </button>
    )
}
export default Button;