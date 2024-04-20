import GoBack from "../../components/GoBack/GoBack"
import Words from "../../components/Words/Words"
import "./Wordle.css"

const Wordle = () => {
  return (
    <div className="WordlePage">
      <GoBack/>
      <Words/>
    </div>
  )
}

export default Wordle