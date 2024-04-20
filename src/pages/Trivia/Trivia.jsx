import GoBack from "../../components/GoBack/GoBack"
import Questions from "../../components/Questions/Questions";
import "./Trivia.css"

const Trivia = () => {
  
  return (
    <div className="TriviaPage">
      <GoBack/>
      <Questions/>
    </div>
  )
}

export default Trivia