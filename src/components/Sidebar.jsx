import React from 'react'
import {
    FaTh,
} from 'react-icons/fa'

const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/dashboard",
            name: "dashboard",
            icon:<FaTh/> 
        }
        {
            path:"/messages",
            name: "messages",
            icon:<FaTh/> 
        }
        {
            path:"/",
            name: "dashboard",
            icon:<FaTh/> 
        }
        {
            path:"/",
            name: "dashboard",
            icon:<FaTh/> 
        }
    ]
  return (
    <div className="container">
        <div className="sidebar">
            <div className="top_section">
                <h1 className="logo">Logo</h1>
                <div className="bars">
                    <FaBars/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar