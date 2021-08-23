import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import MatchDetails from './../components/MatchDetails';
import MatchSchedule from './../components/MatchSchedule';
import ScoreCard from './../components/ScoreCard';
import TeamPlayers from './../components/TeamPlayers';
import ScorePad from './../components/ScorePad';
import Toss from './../components/Toss';
import Dashboard from './../components/Dashboard';
// import { GlobalProvider } from '../ContextApi/GlobalState';

export default function Routes() {
    return (
        <div>
            {/* <GlobalProvider> */}
            <Router>
                {/* <Home /> */}
                <Switch>
                    <Route exact path="/schedule" component={MatchSchedule} />
                    <Route path="/scorecard" component={ScoreCard} />
                    <Route path="/matchdetails" component={MatchDetails} />
                    <Route path="/teamplayer" component={TeamPlayers} />
                    <Route path="/scorepad" component={ScorePad} />
                    {/* <Route path="/toss" component={Toss} /> */}
                    <Route path="/toss/:id" component={Toss} />
                    <Route path="/dashboard" component={Dashboard} />


                    <Route path="*" component={() => <h2>404 Not Found</h2>} />
                </Switch>
            </Router>
            {/* </GlobalProvider> */}
        </div>
    )
}