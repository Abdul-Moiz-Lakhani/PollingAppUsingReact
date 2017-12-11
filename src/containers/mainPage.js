import React, { Component } from 'react';
// import PollingImage from './../images/polling.png';
import PollingSymbol from './../images/pollsymbol.png';

import './MainPage.css'

class MainPage extends Component {
    render() {
        return (
            <div className="mainPageBgImage">
                <div className="mainContainer">
                    <div className="pollingLogoContainer">
                        <img src={PollingSymbol} />
                        <h1>Polling App</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
