// import React from 'react';
import React, { Component } from 'react';

// import loginImage from '../bag_of_paty';// /Users/lukeboat/Documents/Programing/Bag_of_loot/react_web/bag_of_party.png



export class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
                    <div className="header">Register</div>
                    <div className="content"></div>
                        <div className="image"> 
                            <img src='../bag_of_party'/>
                        </div>
                    <div classNAme="form">
                        <div className="form-group">
                            <label htmlFor="username"> Username </label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Email </label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pasword"> Password </label>
                            <input type="pasword" name="pasword" placeholder="pasword" />
                        </div>
                        <div className="footer">
                            <button type='button' className="btn"> register </button>
                        </div>
                    </div>
                 </div>
    }
}

