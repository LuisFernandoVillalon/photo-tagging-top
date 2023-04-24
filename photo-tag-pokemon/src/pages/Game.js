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
import Pinsir from "../assets/pokemon/0127Pinsir.png";
import Kabuto from "../assets/pokemon/0140Kabuto.png";
import Dragonair from "../assets/pokemon/0148Dragonair.png";
import Golbat from "../assets/pokemon/0042Golbat.png";
import Weedle from "../assets/pokemon/0013Weedle.png";
import Gloom from "../assets/pokemon/0044Gloom.png";
import Natu from "../assets/pokemon/0177Natu.png";
import Onix from "../assets/pokemon/0095Onix.png";
import Igglybuff from "../assets/pokemon/0174Igglybuff.png";

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
                    e.profile = Natu;
                    e.found = false;
                } else if (e.name == "Onix") {
                    e.profile = Onix;
                    e.found = false;
                } else if (e.name == "Igglybuff") {
                    e.profile = Igglybuff;
                    e.found = false;
                }
            });
        } else if (props.currentLevel == 1) {
            City.forEach((e) => {
                if (e.name == "Pinsir") {
                    e.profile = Pinsir;
                    e.found = false;
                } else if (e.name == "Kabuto") {
                    e.profile = Kabuto;
                    e.found = false;
                } else if (e.name == "Dragonair") {
                    e.profile = Dragonair;
                    e.found = false;
                }
            });
        } else if (props.currentLevel == 0) {
            House.forEach((e) => {
                if (e.name == "Golbat") {
                    e.profile = Golbat;
                    e.found = false;
                } else if (e.name == "Weedle") {
                    e.profile = Weedle;
                    e.found = false;
                } else if (e.name == "Gloom") {
                    e.profile = Gloom;
                    e.found = false;
                }
            });
        }
        navigate("/photo-tagging-top");
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
                }} 
                />
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
    console.log([genX, genY]);
    if (optionStatus == false) { 
        setOptionStatus(true);
        setXCoord(e.pageX);
        setYCoord(e.pageY);
    } 
    else {
        setOptionStatus(false);
        setXCoord(0);
        setYCoord(0);
    }
}

export default Game;