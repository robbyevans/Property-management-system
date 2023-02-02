import React,{useState} from 'react'
import {NavLink} from "react-router-dom"
import { BiLogOut, BiBuildingHouse } from "react-icons/bi";
import { MdOutlineSettings,MdAttachMoney } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { FaThList,FaBars } from 'react-icons/fa';


const Sidebar = ({ children,user,setUser})=> {
  const[isOpen,setIsOpen]=useState(false);
  const toggle=()=>setIsOpen(!isOpen);

  function handleLogout(){
    fetch("/logout",{method: "DELETE"}).then((r)=>{
      if(r.ok){
        setUser(null);
      }
    });
  }

  const menuItem=[
    {
        path:"/",
        name:"Dashboard",
        icon:<RxDashboard/>
    },
    {
        path:"/rentals",
        name:"Rental-Units",
        icon:<BiBuildingHouse/>
    },
    {
        path:"/tenants",
        name:"Tenants",
        icon:<BsPeople/>
    },
    {
        path:"/finances",
        name:"Finances",
        icon:<MdAttachMoney/>
    },
    {
        path:"/marketing",
        name:"Marketing",
        icon:<HiOutlineSpeakerphone/>
    },
    {
        path:"/statements",
        name:"Statements",
        icon:<FaThList/>
    }
]


  return (
    <>
    {user?(
    <div className="container">
       <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
           <div className="top_section">
               <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
               <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <FaBars onClick={toggle}/>
               </div>
           </div>
           {
               menuItem.map((item, index)=>(
                   <NavLink to={item.path} key={index} className="link" activeclassName="active">
                       <div className="icon">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                   </NavLink>
               ))
           }
           <div style={{width: isOpen ? "220px" : "70px"}} className='mini-sidebar' >

                     <div className="link-end">
                       <div className="icon"><MdOutlineSettings/></div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">Settings</div>
                    </div>

                    <div className="link-end"  onClick={handleLogout}>
                       <div className="icon"><BiLogOut/></div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">Logout</div>
                    </div>
        
           </div>
       </div>
       <main>{children}</main>
       </div>
       ):(
         null
         )}
    </>
);
}

export default Sidebar