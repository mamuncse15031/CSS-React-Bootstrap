import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <h3>My First Form</h3>
                <input type="text" placeholder="Enter Your Name"></input>
                <br></br>
                <input type="submit" value="Submit"></input>
            </div>
        );
    }
}

export default Form;