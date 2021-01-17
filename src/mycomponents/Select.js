import React, { Component } from 'react';

class Select extends Component {

    constructor(){
        super()

        this.state={
            city1: 'Dhaka',
            city2: 'Rangpr',
            city3: 'Rajshahi',
            city4: 'Khulna'
        }
    }
    render() {
        return (
            <div>
                <form>
                <Select value="City">
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </Select>
                </form>
            </div>
        );
    }
}

export default Select;