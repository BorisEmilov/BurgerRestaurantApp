import React from 'react'
import './food.css'

const Food = (props) => {
  return (
    <div style={{background: `url('${props.bgImage}') no-repeat center center/cover`}} className='food'>
        <div className="container">
            <div style={{background: `url('${props.bgImage1}') no-repeat center center/cover`}} className="left"></div>
            <div style={{background: `url('${props.bgImage2}') no-repeat center center/cover`}} className="right"></div>
        </div>
    </div>
  )
}

export default Food