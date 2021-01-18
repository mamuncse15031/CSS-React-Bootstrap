import React, { Component } from 'react';

class List extends Component {


    itemData=(a)=>{
        return <option>{a}</option>
    }

    render() {

        const myList = ['a','b','c','d','e'];
        const listItem = myList.map(this.itemData)
        return (
            <div>
                <select>
                    {listItem}
                </select>
            </div>
        );
    }
}

export default List;