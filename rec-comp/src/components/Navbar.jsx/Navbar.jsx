import React, { useState } from 'react'
import "./navbar.css"

const Navbar = () => {
const [open,setOpen] = useState(false)
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">Sumit</div>
            <div className="menu">
                <span className="menu_title">Home</span>
                <span className="menu_title">Profile</span>
                <div className="option" onClick={()=>setOpen(!open)}>
                    <span className="menu_title">Catogery</span>
                    <div className={open?"option_menu":"option_none"}>
                        <span className='option_menu_item'>Boy Item</span>
                        <span className='option_menu_item'>Girl Item</span>
                        <span className='option_menu_item'>Men's Item</span>
                        <span className='option_menu_item'>Women's Item</span>
                    </div>
                    
                </div>
                <span className="menu_title">Sign In</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar