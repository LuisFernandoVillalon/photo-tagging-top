import levelData from "../LevelData/allLevelData";
import uniqid from "uniqid";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { getRecords } from "../LevelData/firebaseData";
import React, { useState } from "react";

const Leaderboards = () => {
    let [currentList, setCurrentList] = useState([]);

    const levelList = levelData.map((currentLevel) => (
        <IndividualLevel 
            key={uniqid()}
            currentLevel={currentLevel}
            setCurrentList={setCurrentList}
        />
   ))
   const navigate = useNavigate();
   const changeRouteToHome = () => {
       navigate("/photo-tagging-top");
   }
   let temp = [];
   if (currentList === undefined) {
    currentList = temp;
   } else {
    temp = currentList;
   }
   const result = temp.reduce(function (r, o) {
    Object.keys(o).forEach(function (k) {
      r.push(o[k]);
    });
    return r;
  }, []);
  sortList(result);
  console.log(result);
   const list = result.map((user) => (
    
     <UserTimeList 
        key={uniqid()}
        user={user}
     />
   ))
    return (
        <>
            <header onClick={changeRouteToHome} >Leaderboards</header>
            <div className="levels-container">
                {levelList}
            </div>
            <div className="records-list" >{list}</div>
        </>
    )
}


const IndividualLevel = ({currentLevel, setCurrentList}) => {
    return (
        <div className="level-info-container">
            <h2>{currentLevel.name}</h2>
            <img  className="level-select" src={currentLevel.cover} onClick={() => getRecords(currentLevel.level, setCurrentList)} />
        </div>
    )
}

const UserTimeList = ({user}) => {
    //sortList(user);
        return (
            <div className="record-item">
                <div >{user.timeRecord}</div>
                <div >{user.username}</div>
            </div>
        )
}
function sortList (array) {
    //console.log(array);
    return array.sort((a, b) => (a.timeRecord > b.timeRecord ? 1 : -1));
    //(a.time > b.time ? 1 : -1)
}
export default Leaderboards;