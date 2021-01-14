import React, {Component} from 'react'

class SetStateClassCompo extends Component{

    constructor(){
        super()

        this.state={

            name: "Mamun"
        }
    }

    chnageName(a){

        this.setState({name:a})


    }
    render(){
        return <div>
            
            <h1>{this.state.name}</h1>
            <button class="btn btn-secondary" onClick={this.chnageName.bind(this,"Anay")}>Change Name</button>
            <h1>{this.state.name}</h1>

        </div>
    }

}
export default SetStateClassCompo;
