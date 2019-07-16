import React, { useState } from "react";

const HomeButtons = (useState) => {
    
    return (
        <div className="homeButtons">
            <button className="homeButtons__touchdown" onClick={() => useState.setScore1(useState.homeScore + 6)}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => useState.setScore1(useState.homeScore + 3)}>Home Field Goal</button>
        </div>
    );
};

export default HomeButtons;