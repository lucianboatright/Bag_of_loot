// import React from 'react';
import React, { Component } from 'react';

// import loginImage from '../bag_of_party';



export class Login extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
                <div className="content">
                    <div className="image"> 
                        <img src='../bag_of_party'/>
                    </div>
                <div classNAme="form">
                    <div className="form-group">
                        <label htmlFor="username"> Username </label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> password </label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type='button' className="btn"> Login </button>
            </div>
        </div>
        )}
}

