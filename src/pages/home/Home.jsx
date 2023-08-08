import Featured from "../../components/Featured/Featured"
import Slide from "../../components/Slide/Slide"
import TrustBy from "../../components/TrustBy/TrustBy"
import "./home.scss"

const Home = () => {
    return (
        <div>
            <Featured />
            <TrustBy />
            <Slide />
        </div>
    )
}

export default Home