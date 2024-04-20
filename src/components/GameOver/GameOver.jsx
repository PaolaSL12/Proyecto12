import "./GameOver.css"

const GameOver = ({ score, funct}) => {
  return (
    <div className="gameOver">
    <p className="over">GAME OVER</p>
    <p>{score} PUNTOS</p>
    <button onClick={funct}>RESTART</button>
  </div>
  )
}

export default GameOver