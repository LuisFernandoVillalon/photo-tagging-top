import levelData from "../LevelData/allLevelData";
import uniqid from "uniqid";
import "../style.css";
import { useNavigate } from "react-router-dom";

const Levels = (props) => {
   const levelList = levelData.map((currentLevel) => (
        <IndividualLevel 
            key={uniqid()}
            currentLevel={currentLevel}
            props={props}
        />
   ))
    return (
        <div className="levels-container">
            {levelList}
        </div>
    )
}

const IndividualLevel = (props) => {
    const currentCharactersArray = props.currentLevel.characters;
    const characterList = currentCharactersArray.map((currentCharacter) => (
        <IndividualCharacter 
            key={uniqid()}
            currentCharacter={currentCharacter}
        />
   ))

   const navigate = useNavigate();
    const changeRouteToGame = () => {
        props.props.props.setCurrentBoard((props.currentLevel.board));
        props.props.props.setCurrentLevel((props.currentLevel.level));
        navigate("/game");
    }

    return (
        <div className="level-info-container">
            <h2>{props.currentLevel.name}</h2>
            <img onClick={changeRouteToGame} className="level-select" src={props.currentLevel.cover} />
            <div className="character-container">
                <p>Find: </p>
                {characterList}
            </div>
        </div>
    )
}

export const IndividualCharacter = (props) => {
    return (
        <div>
            <img className="character-image" src={props.currentCharacter.profile} />
        </div>
    )
}



export default Levels;