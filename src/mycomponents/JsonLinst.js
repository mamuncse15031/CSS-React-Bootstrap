import React, { Component } from 'react';

class JsonLinst extends Component {

    dataItemCity=(dataCity)=>{
        return <option>{dataCity.city}</option>
        
    }
    dataItemZip=(dataZip)=>{
        return <option>{dataZip.zip}</option>
        
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
        const listItemCity = list.map(this.dataItemCity)
        const listItemZip = list.map(this.dataItemZip)


        return (
            <div>
                <select>
                    {listItemCity}
                </select>
                <br></br>
                <select>
                    {listItemZip}
                </select>
            </div>
        );
    }
}

export default JsonLinst;