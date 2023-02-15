import React from 'react'
import Card from '../Card'
// import PercentageCard from '../PercentageCard'
import ActivePieChart from '../Analytics/ActivePieChart'
import Barchart from '../Analytics/Barchart'
import Colorchart from '../Analytics/Colorchart'
import Linegraph from '../Analytics/Linegraph'
import Newbargraph from '../Analytics/Linegraph'
import NewPieChart from '../Analytics/NewPieChart'
import Piecharts from '../Analytics/Piecharts'
import Respiechart from '../Analytics/Respiechart'
import Updates from '../Updates/Updates'
import Table from '../Table/Table'

function Dashboard() {
  return (
    <div className='dashboard'>Dashboard
       <h1>Dashboard</h1>
       <div className="maindash">
         <div className="dash-top">
           <Card/>
           <Updates/>
         </div>
         <div className='dash-mid'>
          <Linegraph/>
          <NewPieChart/>

         </div>
         <div className='dash-body'>
          <Table/>
          {/* <ActivePieChart/> */}
          {/* <Barchart/> */}
          {/* <Colorchart/> */}
          {/* <Newbargraph/> */}
          {/* <Piecharts/> */}
          {/* <Respiechart/> */}
         </div>
       </div>

    </div>
   
  )
}

export default Dashboard