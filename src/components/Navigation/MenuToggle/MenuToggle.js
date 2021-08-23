import React from 'react'
import style from './MenuToggle.module.css'

const MenuToggle = props => {
   const stl = [
       style.MenuToggle,
       'fa',
       
   ]

   if (props.isOpen){
       stl.push('fa-times')
       stl.push(style.open)
   } else {
       stl.push('fa-bars')
   }
   
    return(
        <i 
            className={stl.join(' ')}
            onClick={props.onToggle}
        />


    )
}

export default MenuToggle;