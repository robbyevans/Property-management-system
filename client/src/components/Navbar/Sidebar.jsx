import React from 'react'
import { BiLogOut, BiBuildingHouse } from "react-icons/bi";
import { MdOutlineSettings,MdAttachMoney } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";


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
        <div className='main-sidebar'>
        <div  className="icon-text dash-btn">
            <RxDashboard className='icon'/> <a className=' ' > Dashboard</a>
          </div>
          <div  className="icon-text ">
            <BiBuildingHouse className='icon'/> <a className=' ' > Rental Units</a>
          </div>
          <div  className="icon-text ">
            <BsPeople className='icon'/> <a className=' ' >Tenants</a>
          </div>
          <div  className="icon-text ">
            <HiOutlineSpeakerphone className='icon'/> <a className=' ' > Marketing</a>
          </div>
          <div  className="icon-text ">
            <MdAttachMoney className='icon'/> <a className=' ' >Finances</a>
          </div>
        </div>

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