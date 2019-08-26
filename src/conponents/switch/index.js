import React from 'react'
import './style.css'
const Switch = (props) => (
    <button type="button" role="switch" aria-checked="true" className="ant-switch ant-switch-checked" ant-click-animating="true">
        <span className="ant-switch-inner"></span>
        <div className="ant-click-animating-node"></div>
        
    </button>
)
export default Switch;