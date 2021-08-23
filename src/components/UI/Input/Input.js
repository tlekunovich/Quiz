import React from 'react'
import style from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}


const Input =(props)=>{

    const inputType = props.type || 'text'
    const stl = [style.Input]
    const htmlFor = `${inputType}-${Math.random()}`
   
    if(isInvalid(props)){
        stl.push(style.invalid)
    }

    return(
        <div className={stl.join(' ')}>
            <label htmlFor={htmlFor}>
                {props.label}
            </label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
            >

            </input>
            {
                isInvalid(props)
                ? <span>{props.errorMessage || 'Введите верное значение'}</span>
                : null
            }
            
        </div>
    )
}

export default Input;