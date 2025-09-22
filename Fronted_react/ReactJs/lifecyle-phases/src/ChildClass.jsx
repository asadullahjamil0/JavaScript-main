import React, { Component } from 'react'

export default class ChildClass extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount called!")
    }
    render() {
        return (
            <div>
                <h1>Hey Asadullah</h1>
            </div>
        )
    }
}
