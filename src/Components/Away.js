import React, { useState } from "react";

const Away = useState => {
    
    return (
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{useState.awayScore}</div>
        </div>
    );
};

export default Away;