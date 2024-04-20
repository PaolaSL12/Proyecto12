import Cards from "../../components/Cards/Cards"
import TopPage from "../../components/TopPage/TopPage"
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
        <TopPage/>
        <Cards/>
    </div>
  )
}

export default Home