import React, { Component } from 'react';
import PollingSymbol from './../images/pollsymbol.png';
import { Nav, NavItem, NavLink, Fade } from 'reactstrap';
import './MainPage.css'
import { Route, Router, Link } from 'react-router-dom';
import classnames from 'classnames';
import CreatePoll from './../components/CreatePoll';
import ShowAllPolls from './../components/ShowAllPolls';

class MainPage extends Component {

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
            <div className="mainPageBgImage">
                <div className="mainContainer">
                    <div className="pollingLogoContainer">
                        <img src={PollingSymbol} alt="Polling Symbol" />
                        <h1>Polling App</h1>
                    </div>
                    <div className="navbarContainer">
                        <Nav tabs className="navbarTabs">
                            <NavItem>
                                <NavLink tag={Link} to="/createpoll" className={this.state.activeTab === '1' ? 'active' : 'notActive'} onClick={() => { this.toggle('1') }}>
                                    Create New Poll
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/allpolls" className={this.state.activeTab === '2' ? 'active' : 'notActive'} onClick={() => { this.toggle('2') }}>
                                    Show All Polls
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <Fade tag="div">
                        <Route exact path="/" component={CreatePoll} />
                        <Route path="/createpoll" component={CreatePoll} />
                        <Route path="/allpolls" component={ShowAllPolls} />
                    </Fade>
                </div>
            </div>
        )
    }
}

export default MainPage;
