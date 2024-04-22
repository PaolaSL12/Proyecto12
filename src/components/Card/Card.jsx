import { Link } from "react-router-dom"
import "./Card.css"

const Card = ({ to, classes, children, src }) => {
  return (
    <Link to={to}>
        <div className={classes}>
          <h2>{children}</h2>
          <div className="divCardImg">
            <img src={src} alt={children} />
          </div>
        </div>
      </Link>
  )
}

export default Card