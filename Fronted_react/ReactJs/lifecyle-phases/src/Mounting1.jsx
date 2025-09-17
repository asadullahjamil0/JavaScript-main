import React, { Component } from 'react'

// we are mounting in class component
export default class Mouting1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'ReactJS'
        }
        console.log("Mounting1 Constructore invoked!..");
    }

    render() {
        console.log("Mounting1 Render invoked!..");
        
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.props.city}</h1>
            </div>
        )
    }
}
