import uniqid from "uniqid";
import Sky from "../LevelData/Sky";
import City from "../LevelData/City";
import House from "../LevelData/House";
import "../style.css";
import { formatTime } from "./Timer";
import Pokeball from "../assets/pokeball.png";


const OptionMenu = (props) => {
    let pokeList = [];
    if (props.props.currentLevel == 2) {
        pokeList = Sky;
    } else if (props.props.currentLevel == 1) {
        pokeList = City;
    } else if (props.props.currentLevel == 0) {
        pokeList = House;
    }
    const optionsList = pokeList.map((currentOption) => (
            <IndividualOption 
                key={uniqid()}
                currentOption={currentOption}
                xCoord={props.xCoord}
                yCoord={props.yCoord}
                setSelectionStatus={props.setSelectionStatus}
                screen={props.screen}
                setCharacterFound={props.setCharacterFound}
                setGameStatus={props.setGameStatus}
                pokeList={pokeList}
                seconds={props.seconds}
            />
    ))

    return (
        <div className="option-menu" style={{top: props.yCoord, left: props.xCoord}}>
            {optionsList}
        </div>
        )
}

const IndividualOption = (props) => {
    return (
        <div className="option-container" onClick={() => checkPosition  (props.xCoord, props.yCoord, props.currentOption, props.setSelectionStatus, props.screen, props.setCharacterFound, props.setGameStatus, props.pokeList, props.seconds)}>
            <div className="option" >
                {props.currentOption.name}
            </div>
            <img id="optIcon"className="option-icon" src={props.currentOption.profile} />
        </div>
    )
}


function checkPosition(x , y, array, setSelectionStatus, screen, setCharacterFound, setGameStatus, pokeList, seconds) { 
    const genX = Math.round((x / screen.width) * 100);
    const genY = Math.round((y / screen.height) * 100);
    if (
        genX >= array.xCoord[0] && 
        genX <= array.xCoord[1] && 
        genY >= array.yCoord[0] && 
        genY <= array.yCoord[1]
    ) {
             for (let i = 0; i < pokeList.length; ++i) {
                 if (array.name === pokeList[i].name) {
                    pokeList[i].profile = Pokeball;
                    pokeList[i].found = true;
                 }
             }
            setCharacterFound(true);
            setSelectionStatus(false);
            checkWinner(pokeList, setGameStatus, seconds);
            return;
    } 
    setCharacterFound(false);
    setSelectionStatus(true);
}

function checkWinner(pokeList, setGameStatus, seconds) {
    const gameStat =  pokeList.every((e) => {
        return e.found === true;
    });

    setGameStatus({
        stat: gameStat,
        time: formatTime(seconds)
    });
}

export default OptionMenu;