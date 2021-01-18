import React, { Component } from 'react';

class List extends Component {


    itemData=(a)=>{
        return <li>{a}</li>
    }

    render() {

        const myList = ['a','b','c','d','e'];
        const listItem = myList.map(this.itemData)
        return (
            <div>
                <ol>
                    {listItem}
                </ol>
            </div>
        );
    }
}

export default List;