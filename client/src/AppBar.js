import React, { Component } from 'react';
import "./AppBar.css";
const _ = require('lodash');


class AppBar extends Component {
    render() {
        return (
            <div className="appBar">
                <div className='appBarActionsContainer'>
                    <div className='flexSpacer' />
                    <div className='appBarActions'>
                        <h1>Simple-TODO</h1>
                      <div className='flexSpacer'/>
                        <button>+</button>
                    </div>
                    <div className='flexSpacer' />
                </div>
            </div>
        );
    }
}

export default AppBar;
