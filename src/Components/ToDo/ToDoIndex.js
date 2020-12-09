import React, { Component } from 'react';
import shortid from 'shortid';

class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='text' value={this.state.text} onChange={this.handleChange} placeholder='Add Task' />
                <button onClick={this.handleSubmit}>Add Task</button>
            </form>
        )
    }
}

export default ToDoIndex;