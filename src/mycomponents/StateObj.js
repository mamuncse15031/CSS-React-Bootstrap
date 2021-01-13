import React, {Component} from 'react'

class StateObj extends Component{

    constructor(){
        super()

        this.state={
            name: "Mamun",
            age: "28 years",
            height: "5 feet 11 inches"

        }
    }



    render(){

        return <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age}</h1>
                <h1>Height: {this.state.height}</h1>
                
            </div>
            }
}

export default StateObj;