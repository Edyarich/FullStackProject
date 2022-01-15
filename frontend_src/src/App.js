import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Menu from "./components/Menu.js"
import HomePage from "./components/HomePage.js"
import AboutUs from "./components/AboutUs.js";
import Forum from "./components/Forum.js";
import Events from "./components/Events.js";
import Login from "./components/Login.js"

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Menu/>
                        <HomePage/>
                    </Route>

                    <Route path='/events'>
                        <Menu/>
                        <Events/>
                    </Route>

                    <Route path='/forum'>
                        <Menu/>
                        <Forum/>
                    </Route>

                    <Route exact path='/about_us'>
                        <Menu/>
                        <AboutUs/>
                    </Route>

                    <Route exact path='/login' component={Login}/>
                </Switch>
            </Router>
        </div>
  );
}

export default App;
