import { Link } from "react-router-dom"
import "./GoBack.css"

const GoBack = () => {
  return (
    <Link to="/">
        <div className="GoBack">
        <img src="/assets/goBack.png" alt="goBack" /><p >Pagina principal</p>
        </div>
    </Link>
  )
}

export default GoBack