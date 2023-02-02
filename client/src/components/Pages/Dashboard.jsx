import React from 'react'
import Card from '../Card'
import PercentageCard from '../PercentageCard'

function Dashboard() {
  return (
    <div className='dashboard'>Dashboard
       <h1>Dashboard</h1>
       <div className="dashboard-top">
         <Card/>
         <PercentageCard/>
       </div>
    </div>
   
  )
}

export default Dashboard