import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()

        this.state = {
            username: " "
        }
    }

    onChangeHandler=(event)=>{
        var myName = event.target.name
        var myValue = event.target.value
        this.setState({[myName]:myValue})

    }
    onSubmitHandler=()=>{
        alert(this.state.username)
    }


    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmitHandler}>
                <h3>My First Form</h3>
                <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Enter Your Name"></input>
                <br></br>
                <input type="submit" value="Submit"></input>
                <p>{this.state.username}</p>
                </form>
                
            </div>
        );
    }
}

export default Form;