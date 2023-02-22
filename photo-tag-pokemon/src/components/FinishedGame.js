import { useState } from "react";
import {addTimetoDatabase} from "../LevelData/firebaseData";
import { useNavigate } from "react-router-dom";

const FinishedGame = ({timeRecord, props}) => {
    const [username, setUsername] = useState("Pika");
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const level = props.currentLevel;
    const navigate = useNavigate();
    const backHome = () => {
        navigate("/photo-tagging-top");
    }
    return (
        <div  className="won-game">
            <div>You Found Them All! Good Job!</div>
            <div>Submit your score!</div>
            <div>Your time: {timeRecord}</div>
            <input type="text" onChange={handleChange} placeholder="Enter a username to display"></input>
            <button onClick={() => {
                addTimetoDatabase({timeRecord, username, level}),
                backHome()
            }} type="submit">Submit</button>
        </div>
    )
}



export default FinishedGame;