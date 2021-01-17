import React, { Component } from 'react';

class SignupForm extends Component {

    constructor(){
        super()

        this.state={
            fname:" ",
            lname: " ",
            email: " ",
            mobile: " "

        }
    }
    onChangeHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({[inputName]:inputValue})
    }
    onSubmitHandler=()=>{
        alert(this.state.fname)
        alert(this.state.lname)
        alert(this.state.email)
        alert(this.state.mobile)

    }

    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmitHandler}>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile Number"></input><br></br>

                    <input  name="submit" type="submit" value="Submit"></input>
                </form>
                <p>{this.state.fname}</p>
                <p>{this.state.lname}</p>
                <p>{this.state.email}</p>
                <p>{this.state.mobile}</p>
            </div>
        );
    }
}

export default SignupForm;