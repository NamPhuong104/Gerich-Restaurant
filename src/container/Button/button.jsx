import React from "react";
import './button.css'

const Button = ({title}) => (
    <div>
        <button className='button'>{title}</button>
    </div>
)

export default Button;