import React from 'react';

import loginImage from '../..bag_o_party.png'



export class Register extends React.Component {
    constrctor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content"></div>
            <div className="image"> 
                <img src={loginImage}/>
            </div>
            <div classNAme="form">
                <div className="form-group">
                <label htmlFor="username"> Username </label>
                <input type="text" name="username" placeholder="username">
            </div>
                <div className="form-group">
                <label htmlFor="email"> Username </label>
                <input type="text" name="email" placeholder="email">
            </div>
                <div className="form-group">
                <label htmlFor="pasword"> Username </label>
                <input type="pasword" name="pasword" placeholder="pasword">
            </div>
            <div className="footer">
             <button type='button' className="btn"> register </button>
            </div>
        </div>
    }
}

