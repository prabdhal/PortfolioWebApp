import React, { useEffect, useState } from 'react';

import './TowerDefenceGame.css';

const TowerDefenceGame = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    toggleDarkMode(darkMode);
  }, [])

  const toggleDarkMode = (darkMode) => {
    if (darkMode) 
      return "dark-mode";

    return "dark-mode hide";
  }

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={toggleDarkMode(darkMode)}></div>
      <h2 style={{ paddingTop: "100px", textAlign: "center" }}>Tower Defence - Enemy Wave</h2>
      <div className="game-container">
        <iframe
          className="game"
          src="https://i.simmer.io/@prabdhal/tower-defence-3d-enemy-wave">
        </iframe>
        <button
          className="btn-sm btn-secondary"
          onClick={handleClick}
        >
          Dark Mode
          </button>
      </div>
    </>
  );
}

export default TowerDefenceGame;