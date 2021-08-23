import React, {Component} from 'react'
import style from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'


const links =[
   {to: '/', label:'Список', exact: true},
   {to: '/auth', label:'Авторизация', exact: false},
   {to: '/quiz-creator', label:'Создать тест', exact: false}
]



class Drawer extends Component {
    
 clickHandler = () =>{
     this.props.onClose()
 }  

 renderLinks() {
     return links.map((link,index) => {
         return (
             <li key={index}>
                 <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={style.active}
                    onClick={this.clickHandler}
                 > 
                    {link.label} 
                </NavLink>
             </li>
         )
     })
 }   
    
    render () {
const stl = [style.Drawer]
if(!this.props.isOpen){
    stl.push(style.close)
}

        return (
            <React.Fragment>
            <nav className={stl.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
            {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }
}

export default Drawer;