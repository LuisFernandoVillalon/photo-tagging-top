import levelData from "../LevelData/allLevelData";
import React, { useState, useRef, useEffect } from "react";
import uniqid from "uniqid";
import { IndividualCharacter } from "../components/Levels";
import { useNavigate } from "react-router-dom";
import  OptionMenu  from "../components/OptionMenu";
import Sky from "../LevelData/Sky";
import City from "../LevelData/City";
import House from "../LevelData/House";
import Timer from "../components/Timer";
import FinishedGame from "../components/FinishedGame";

const Game = (props) => {
    
    const [seconds, setSeconds] = useState(0);
    const [selectionStatus, setSelectionStatus] = useState(false);
    const [optionStatus, setOptionStatus] = useState(false);
    const [gameStatus, setGameStatus] = useState({
        status: false,
        time: 0
    });
    const [characterFound, setCharacterFound] = useState(false);
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);
    const [screen, setScreen] = useState({
        width: 0,
        height: 0
    });
    
    useEffect(() => {
        const tryAgainTimer= setTimeout(() => {
            if (selectionStatus) {
                setSelectionStatus(false);
            }
            if (characterFound) {
                setCharacterFound(false)
            }
        }, [2000]);
        return () => clearTimeout(tryAgainTimer);
    }, [selectionStatus, characterFound]);



    const navigate = useNavigate();
    const changeRouteToHome = () => {
        if (props.currentLevel == 2) {
            Sky.forEach((e) => {
                if (e.name == "Natu") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/7/71/0177Natu.png";
                    e.found = false;
                } else if (e.name == "Onix") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/b/b7/0095Onix.png";
                    e.found = false;
                } else if (e.name == "Igglybuff") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/0/06/0174Igglybuff.png";
                    e.found = false;
                }
            });
        } else if (props.currentLevel == 1) {
            City.forEach((e) => {
                if (e.name == "Pinsir") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/a/a9/0127Pinsir.png";
                    e.found = false;
                } else if (e.name == "Kabuto") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/d/d2/0140Kabuto.png";
                    e.found = false;
                } else if (e.name == "Dragonair") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/0/0d/0148Dragonair.png";
                    e.found = false;
                }
            });
        } else if (props.currentLevel == 0) {
            House.forEach((e) => {
                if (e.name == "Golbat") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/7/76/0042Golbat.png";
                    e.found = false;
                } else if (e.name == "Weedle") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/3/36/0013Weedle.png";
                    e.found = false;
                } else if (e.name == "Gloom") {
                    e.profile = "https://archives.bulbagarden.net/media/upload/e/e0/0044Gloom.png";
                    e.found = false;
                }
            });
        }
        navigate("/");
    }

    let currentCharactersArray = [];
    if (props.currentLevel == 0) {
        currentCharactersArray = levelData[0].characters;
    } else if (props.currentLevel == 1) {
        currentCharactersArray = levelData[1].characters;
    } else if (props.currentLevel == 2) {
        currentCharactersArray = levelData[2].characters;
    }
    const characterList = currentCharactersArray.map((currentCharacter) => (
        <IndividualCharacter 
            key={uniqid()}
            currentCharacter={currentCharacter}
        />
   ))
    return (
        <>
        <div className="body-level">
            <div className="character-container"> 
                <div className="character-game">
                    {characterList}
                </div>
                <div className="home-timer-container">
                    <button onClick={changeRouteToHome} >home</button>
                    <Timer 
                        seconds={seconds} setSeconds={setSeconds}
                    />
                </div>
            </div>
            {selectionStatus && <div className="try-again">Try Again!</div>}  
            {characterFound && <div className="try-again">Captured!</div>}     
            {gameStatus.stat && <FinishedGame 
                timeRecord={gameStatus.time}
                props={props}
            />}
            <div className="current-level-container">
                <img className="current-board" src={props.currentBoard} 
                onLoad={(e) => onImgLoad(setScreen, e)}
                onClick={(e) => {
                    showOptions(e, optionStatus, setOptionStatus, setXCoord, setYCoord, screen)
                }} />
                {optionStatus && <OptionMenu 
                    props={props}
                    currentCharactersArray={currentCharactersArray}
                    xCoord={xCoord}
                    yCoord={yCoord}
                    setSelectionStatus={setSelectionStatus}
                    screen={screen}
                    setCharacterFound={setCharacterFound}
                    setGameStatus={setGameStatus}
                    seconds={seconds}
                />}          
            </div>
        </div>
        </>
    )

}
function onImgLoad(setScreen, e)  {
    setScreen({
        width: window.innerWidth,
        height: window.innerHeight
    })
};

function showOptions(e, optionStatus, setOptionStatus, setXCoord, setYCoord, screen) { 
      const genX = Math.round(((e.pageX )/ screen.width) * 100);
	  const genY = Math.round(((e.pageY ) / screen.height) * 100);
    // // //  console.log([e.clientX, e.clientY])
    // // //  console.log([e.pageX, e.pageY])
    // //  console.log([e.screenX, e.screenY])
    console.log([genX, genY]);
    if (optionStatus == false) { 
        setOptionStatus(true);
        setXCoord(e.pageX);
        setYCoord(e.pageY);
    } else {
        setOptionStatus(false);
        setXCoord(0);
        setYCoord(0);
    }
}
  

export default Game;