import "../style.css";
import Levels from "../components/Levels";
import ScoreBoard from "../components/Scoreboard";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();
    const changeRouteToHome = () => {
        navigate("/photo-tagging-top");
    }
    return (
        <div>
            <header onClick={changeRouteToHome}>Where's that Pokemon?</header>
            <p>Choose a stage and find the assigned Pokemons!</p>
            <p>See where you place on the scoreboard!</p>
            <Levels
                props={props}
            />
            <ScoreBoard />
        </div>
    )
}
export default Home;