import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import MatchDetails from './../components/MatchDetails';
import Home from './../components/Home';
import ScoreCard from './../components/ScoreCard';
import TeamPlayers from './../components/TeamPlayers';
import ScorePad from './../components/ScorePad';
import Toss from './../components/Toss';
// import { GlobalProvider } from '../ContextApi/GlobalState';

export default function Routes() {
    return (
        <div>
            {/* <GlobalProvider> */}
            <Router>
                {/* <Home /> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/scorecard" component={ScoreCard} />
                    <Route path="/matchdetails" component={MatchDetails} />
                    <Route path="/teamplayer" component={TeamPlayers} />
                    <Route path="/scorepad" component={ScorePad} />
                    {/* <Route path="/toss" component={Toss} /> */}
                    <Route path="/toss/:id" component={Toss} />


                    <Route path="*" component={() => <h2>404 Not Found</h2>} />
                </Switch>
            </Router>
            {/* </GlobalProvider> */}
        </div>
    )
}