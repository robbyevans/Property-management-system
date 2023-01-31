import React,{useState} from 'react'
import {NavLink} from "react-router-dom"
import {IoMdNotificationsOutline} from 'react-icons/io';
import {IoIosArrowDropdown} from 'react-icons/io';
import "../Styles.css"

function Navbar({user,setUser}) {




  return (
    <div className='Navbar'>
     <nav>
     {user ? (
          <>
          {/* <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/Analytics">Analytics</NavLink>  */}
    
          <div  className=" user-profile ">
          <IoMdNotificationsOutline  className='icon notification'/><img className=' avatar' src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400" /> <a className=' ' >{user.username} </a>
          <IoIosArrowDropdown className='dp-icon' />
          
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