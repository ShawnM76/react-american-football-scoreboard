import React, { useState } from "react";

const Home = (useState) => {
    
    return (
        <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{useState.homeScore}</div>
        </div>
    );
};

export default Home;