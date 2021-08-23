import React from 'react'
import style from './../AnswerItem/AnswerItem.module.css'



const AnswerItem = (props) => {
 
    const stl = [style.AnswerItem]

    if(props.state){
        stl.push(style[props.state])
  }  

    return (
        <li className={stl.join(' ')} onClick={()=>props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;

