import React from 'react'
import "./Scoreboard.css"


const Scoreboard = ({scores, xPlaying}) => {
    const{xScore, oScore} = scores;
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && "inactive"}`} >X - {xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}


export default Scoreboard