import React from "react";
import "./Score.css"

const Score = React.memo(({score, color}) => {
  return (
    <p className="score" style={{color: color}}>SCORE: {score}</p>
  )
})

export default Score