import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Menu from "./components/Menu.js"
import HomePage from "./components/HomePage.js"
import AboutUs from "./components/AboutUs.js";
import Forum from "./components/Forum.js";
import Events from "./components/Events.js";

function App() {
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    {/*<Route exact path='/learn' component={Learn}/>*/}
                    <Route path='/events' component={Events}/>
                    <Route path='/forum' component={Forum}/>
                    <Route exact path='/about_us' component={AboutUs}/>
                </Switch>
            </Router>
        </div>
  );
}

export default App;
