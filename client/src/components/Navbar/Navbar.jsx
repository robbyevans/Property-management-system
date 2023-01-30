import React,{useState} from 'react'
import {NavLink} from "react-router-dom"

// import {FaUserAlt} from 'react-icons/fa';
import "../Styles.css"

function Navbar({user,setUser}) {




  return (
    <div className='Navbar'>
     <nav>
     {user ? (
          <>
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/Analytics">Analytics</NavLink> 
          <div className='user-profile'>
            <div className='notification'></div>
            <div className='user-dp'></div>
          </div>
          
          {/* <div className='username'><p><span className='span-text'>welcome: </span><span className='span-username'>{user.username}<FaUserAlt className="user-icon"/></span></p></div> */}
          </>
        ):(
          <>
          <NavLink className="navlink" to="/Login">Login</NavLink>
          <NavLink className="navlink" to="/Signup">Signup</NavLink>
          </>

        )}
      
     </nav>
    </div>
  )
}

export default Navbar