import React from 'react';
import { Route, Router, Switch, Link } from 'react-router-dom';
import CreatePoll from './components/CreatePoll';
import ShowAllPolls from './components/ShowAllPolls';
import './containers/MainPage.css';
import { Nav, NavItem, Fade, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import PollingSymbol from './images/pollsymbol.png';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

class AppRoutes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1'
        };

        this.toggle = this.toggle.bind(this)
    }

    toggle(tab) {

                

        this.setState({
            activeTab: tab
        })
    }

    render() {
        return (
            <Router history={customHistory}>
                <div className="mainPageBgImage">
                    <div className="mainContainer">
                        <div className="pollingLogoContainer">
                            <img src={PollingSymbol} alt="Polling Symbol" />
                            <h1>Polling App</h1>
                        </div>
                        <div className="navbarContainer">
                            <Nav tabs className="navbarTabs">
                                <NavItem>
                                    <NavLink className='active' tag={Link} to="/createpoll">
                                        Create New Poll
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/allpolls">
                                        Show All Polls
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <Fade tag="div">
                            <Switch>
                                <Route exact path="/" component={CreatePoll} />
                                <Route path="/createpoll" component={CreatePoll} />
                                <Route path="/allpolls" component={ShowAllPolls} />
                            </Switch>
                        </Fade>
                    </div>
                </div>
            </Router>
        )
    }
}

export default AppRoutes;