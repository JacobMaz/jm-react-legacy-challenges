import React, { Component } from 'react';
import ToDoIndex from './ToDoIndex';
import ToDoTask from './ToDoTask';

export default class ToDoDisplay extends Component {

    state = {
        todos: []
    };

    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id)=>{
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    render() {
        return (
            <div>
                <ToDoIndex onSubmit={this.addToDo} />
                {this.state.todos.map(todo => (<ToDoTask key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)} todo={todo} />))}
            </div>
        )
    }
}