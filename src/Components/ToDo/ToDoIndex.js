import React, { Component } from 'react';

class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <input placeholder='Add Task' />
        )
    }
}

export default ToDoIndex;