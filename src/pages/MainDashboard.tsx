import { useState } from "react";

function MainDashboard() {
    return(
        <>
        <nav className="nav">
            <div className="date"><p className="date-time">Feb 4, 2026 <br /> Wednesday <br /> Main Ped</p></div>
        </nav>

        <div className="wrapper">
            <div className="cards"></div>
        </div>
        </>
        
    );
}

export default MainDashboard;