import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Translate from '../utils/Translate'

interface navBtnProps {
    path: string,
    text: string,
    onClick? : ()=>void
}

const NavButton = ({path, text, onClick}: navBtnProps) => {
    return (
        <NavLink 
            to={path}
            className={({isActive}) => {
                return 'navBtn'
                //return `navLink ${isActive ? 'navLinkActive' : ''}`;
            }}
            onClick={onClick}
        >
            {Translate(text)}
        </NavLink> 
    )
}

const NavigationBar = () => {

    const [openMovilMenu, setOpenMovilMenu] = useState(false);
    const [animationBtn, setAnimationBtn] = useState(false)

    const toogleMenu = () => {
        setOpenMovilMenu(!openMovilMenu)
    }

    const toogleAnimationBtn = () => {
        setAnimationBtn(!animationBtn)
    }

    return (
        <>  
            <div 
                className={`buttonMovil ${animationBtn?'equis':'bars'}`}
                onClick={()=> {
                    toogleMenu()                    
                    toogleAnimationBtn()
                }}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={`navContainer ${openMovilMenu ? 'open' : 'close'}`}>
                <NavButton 
                    path='/me' 
                    text='general.about'
                    onClick={() => {
                        toogleMenu()                    
                        toogleAnimationBtn()
                    } }
                />
                
                <NavButton 
                    path='/skills' 
                    text='general.skills' 
                    onClick={() => {
                        toogleMenu()                    
                        toogleAnimationBtn()
                    } }
                />
                
                <NavButton 
                    path='/projects' 
                    text='general.projects' 
                    onClick={() => {
                        toogleMenu()                    
                        toogleAnimationBtn()
                    } }
                />
            </div>
        </>
    )
}

export default NavigationBar