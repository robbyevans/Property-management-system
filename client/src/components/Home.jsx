import React from 'react'
import Colorchart from './Analytics/Colorchart'
import Barchart  from './Analytics/Barchart'
import Piechart from './Analytics/Piecharts'
import Respiechart from './Analytics/Respiechart'
import Linegraph from './Analytics/Linegraph'
import Newbargraph from './Analytics/Newbargraph'
import NewPieChart from './Analytics/NewPieChart'
import ActivePieChart from './Analytics/ActivePieChart'

function Home() {
  return (
    <div className='home'>
      <h1>Analytics</h1>
      <div className='piechart-wrap'>
        <Colorchart/>
        <Piechart/>
        
      </div>
      {/* <h1>Analytics</h1>
      <div className="charts">
        <div className="secondary-chart"><Colorchart/></div>
      </div> */}
      <Barchart/>
      <Piechart/>
      <Linegraph/>
      <Newbargraph/>
      <div className="new-chart">
        <div className="new-primary-chart"><NewPieChart/></div>
        </div>
        <ActivePieChart/>
   

    </div>
  )
}

export default Home