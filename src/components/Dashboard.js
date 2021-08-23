import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <div>
                <h2>Wlcome to Dashboard</h2>
            </div>
            <div>
                <Link to={"/scorepad"}>Scorepad</Link>
                <Link to={"/schedule"}>Match Schedule</Link>
            </div>
        </div>
    )
}

export default Dashboard
