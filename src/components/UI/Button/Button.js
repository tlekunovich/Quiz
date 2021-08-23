import React from 'react'
import style from './Button.module.css';


const Button = (props) => {
   const stl = [
       style.Button,
       style.[props.type]
   ]
   
    return(
        <button 
        className={stl.join(' ')}
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}


export default Button;