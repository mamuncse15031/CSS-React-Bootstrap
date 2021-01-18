import React, { Component } from 'react';

class JsonLinst extends Component {

    dataItem=(data)=>{
        return <option>{data}</option>
    }


    render() {
        const list=[
            {
                city: 'Dhaka',
                zip: 1700
            },
            {
                city: 'Khulna',
                zip: 1800
            },
            {
                city: 'Tangail',
                zip: 1900
            }
        ]
        const listItem = list.map(this.dataItem)


        return (
            <div>
                <select>
                    {listItem}
                </select>
            </div>
        );
    }
}

export default JsonLinst;