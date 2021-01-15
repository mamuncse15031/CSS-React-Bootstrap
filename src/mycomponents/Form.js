import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()

        this.state = {
            name: " "
        }
    }

    onChangeHandler=(event)=>{

        var newName = event.target.value
        this.setState({name:newName})


    }



    render() {
        return (
            <div>
                <h3>My First Form</h3>
                <input onChange={this.onChangeHandler} type="text" placeholder="Enter Your Name"></input>
                <br></br>
                <input type="submit" value="Submit"></input>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default Form;