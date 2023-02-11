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
import Table from '../Table/Table'

function Dashboard() {
  return (
    <div className='dashboard'>Dashboard
       <h1>Dashboard</h1>
       <div className="dashboard-top">
         <Card/>
         
         {/* <PercentageCard/> */}
       </div>
       <div className='dashbody'>
        <Table/>
        <ActivePieChart/>
        {/* <Barchart/> */}
        {/* <Colorchart/> */}
        {/* <Linegraph/> */}
        {/* <Newbargraph/> */}
        <NewPieChart/>
        {/* <Piecharts/> */}
        {/* <Respiechart/> */}
       </div>

    </div>
   
  )
}

export default Dashboard