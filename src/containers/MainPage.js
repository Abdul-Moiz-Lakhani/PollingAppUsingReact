import React, { Component } from 'react';
import PollingSymbol from './../images/pollsymbol.png';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './MainPage.css'
import { Route, Router, Link } from 'react-router-dom';
import classnames from 'classnames';
import CreatePoll from './../components/CreatePoll';
import ShowPreviousPolls from './../components/ShowPreviousPolls';

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1'
        };
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
                                <NavLink tag={Link} to="/previouspolls" className={this.state.activeTab === '2' ? 'active' : 'notActive'} onClick={() => { this.toggle('2') }}>
                                    Show Previous Polls
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div>
                        <Route path="/createpoll" component={CreatePoll} />
                        <Route path="/previouspolls" component={ShowPreviousPolls} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
