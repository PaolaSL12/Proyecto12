import "./Score.css"

const Score = ({score, color}) => {
  return (
    <p className="score" style={{color: color}}>SCORE: {score}</p>
  )
}

export default Score