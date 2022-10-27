import React from 'react'
import { NavLink } from 'react-router-dom'
import Translate from '../utils/Translate'

interface navBtnProps {
    path: string,
    text: string
}

const NavButton = ({path, text}: navBtnProps) => {
    return (
        <NavLink 
            to={path}
            className={({isActive}) => {
                return ''
                //return `navLink ${isActive ? 'navLinkActive' : ''}`;
            }}
        >
            {Translate(text)}
        </NavLink> 
    )
}

const NavigationBar = () => {
    let activeStyle = {
        textDecoration: "underline",
    };
    let activeClassName = "underline";

    return (
        <>  
            <button 
                className='buttonMovil'
                onClick={()=> {
                    console.log('ABRIR MENU')
                }}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <div className='navContainer open close'>
                <NavButton path='/me' text='general.about' />
                
                <NavButton path='/skills' text='general.skills' />
                
                <NavButton path='/projects' text='general.projects' />
            </div>
        </>
    )
}

export default NavigationBar