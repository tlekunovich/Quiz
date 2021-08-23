import React from 'react'
import style from './Loader.module.css'


const Loader = props => {
    return(
        <div className={style.center}>
        <div className={style.Loader}>
            <div/><div/>
        </div>
        </div>
    )
}

export default Loader