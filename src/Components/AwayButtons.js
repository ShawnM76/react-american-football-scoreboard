import React, { useState } from "react";

const AwayButtons = (useState) => {
    
    return (
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => useState.setScore2(useState.awayScore + 6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => useState.setScore2(useState.awayScore + 3)}>Away Field Goal</button>
        </div>
    );
};

export default AwayButtons;