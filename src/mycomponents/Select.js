import React, { Component } from 'react';

class Select extends Component {

    constructor(){
        super()

        this.state={
            city1: 'Dhaka',
            city2: 'Rangpr',
            city3: 'Rajshahi',
            city4: 'Khulna',
            selected: " "
        }
    }

    onChangeHandler=(event)=>{
        var selectedValue= event.target.value;
        this.setState({selected:selectedValue})
    }
    render() {
        return (
            <div>
                <select onChange={this.onChangeHandler} value={this.state.selected}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
                <p>Selected Option: {this.state.selected}</p>
            </div>
        );
    }
}

export default Select;