import "../styles/events.css"
import {useRouteMatch, BrowserRouter as Router, Route, Switch} from "react-router-dom";

import tournamentPic from "../images/tournament.jpg"
import eventPic from "../images/calendar_event.jpg"
import closedTPic from "../images/closed_tournament.jpeg"

import EventTypeWindow from "./EventTypeWindow.js";
import FullCalendar from "./FullCalendar";
import ClubTournaments from "./ClubTournaments";
import ClosedTournaments from "./ClosedTournaments";

function Events() {
    let {path, url} = useRouteMatch();
    console.log(path, url);

    return <div>
        <Switch>
            <Route exact path={path}>
                <div className="events_windows">
                    <EventTypeWindow title="Event Calendar" img={eventPic}
                                     link={`${url}/event_calendar`} />
                    <EventTypeWindow title="Club Tournaments" img={tournamentPic}
                                     link={`${url}/club_tournaments`}/>
                    <EventTypeWindow title="Closed Tournaments" img={closedTPic}
                                     link={`${url}/closed_tournaments`}/>
                </div>;
            </Route>

            <Route path={`${path}/event_calendar`}>
                <FullCalendar />
            </Route>

            <Route path={`${path}/club_tournaments`}>
                <ClubTournaments/>
            </Route>

            <Route path={`${path}/closed_tournaments`}>
                <ClosedTournaments/>
            </Route>
        </Switch>
    </div>
}

export default Events;