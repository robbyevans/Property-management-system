import React from 'react'

function Card() {
  return (
    <div className='card-wrap'>

      <div className="card card-main">
        <h3>Total rent</h3>
        <h1>$3500</h1>
        <p><span>+13%</span> +15 this week</p>
      </div>

      <div className="card card-1">
        <h3>Total Units</h3>
        <h1>45</h1>
        <p><span>+13%</span> +15 this week</p>
      </div>

      <div className="card">
        <h3>Tenants</h3>
        <h1>40</h1>
        <p><span>+13%</span> -3 this week</p>
      </div>

      <div className="card">
        <h3>Vacancies</h3>
        <h1>5</h1>
        <p><span>+13%</span> -1 this week</p>
      </div>


    </div>
  )
}

export default Card