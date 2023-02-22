import React, { useState } from 'react';
import Home from "./pages/Home";
import Leaderboards from './pages/Leaderboards';
import Game from "./pages/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";

function App() {
  const [currentBoard, setCurrentBoard] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");

  return (
    <div className="body-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home 
              currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}
              currentLevel={currentLevel} setCurrentLevel={setCurrentLevel}
            />} />
            <Route path="/game" element={<Game 
              currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}
              currentLevel={currentLevel} setCurrentLevel={setCurrentLevel}
            />} />
            <Route path="/leaderboards" element={<Leaderboards 
              currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}
              currentLevel={currentLevel} setCurrentLevel={setCurrentLevel}
            />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
