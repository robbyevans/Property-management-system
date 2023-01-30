import React from 'react'
import Sidebar from '../Navbar/Sidebar'

function Landingpage({setUser}) {

  

  return (
    <>
    <div className='Landing-page'>
      <div>
        <Sidebar setUser={setUser}/>
        
      </div>
    </div>
    </>
  )
}

export default Landingpage