import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";

function Sidebar({setUser}) {
  function handleLogoutClick(){
    fetch("/logout",{method: "DELETE"}).then((r)=>{
      if(r.ok){
        setUser(null);
      }
    });
  }
  return (
    <div className='sidebar'>
        {/* <div className='btn-wrap'>
        <div onClick={handleLogoutClick} className="icon-text ">
            <MdOutlineSettings className='icon'/> <a className=' ' > Settings</a>
          </div>
          <div onClick={handleLogoutClick} className="icon-text ">
            <MdOutlineSettings className='icon'/> <a className=' ' > Settings</a>
          </div>
          <div onClick={handleLogoutClick} className="icon-text ">
            <MdOutlineSettings className='icon'/> <a className=' ' > Settings</a>
          </div>
          <div onClick={handleLogoutClick} className="icon-text ">
            <MdOutlineSettings className='icon'/> <a className=' ' > Settings</a>
          </div>
          <div onClick={handleLogoutClick} className="icon-text ">
            <MdOutlineSettings className='icon'/> <a className=' ' > Settings</a>
          </div>
        </div> */}

          <div className='mini-sidebar'>
          <div onClick={handleLogoutClick} className="icon-text ">
            <MdOutlineSettings className='icon'/> <a className=' ' > Settings</a>
          </div>
          <div onClick={handleLogoutClick} className="icon-text ">
            <BiLogOut className='icon'/> <a className=' ' > Logout</a>
          </div>
          </div>
        </div>
  )
}

export default Sidebar