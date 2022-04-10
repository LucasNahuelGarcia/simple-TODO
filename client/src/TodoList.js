import React, { Component } from 'react';
import TodoCard from './TodoCard';
import "./todoList.css";
const _ = require('lodash');

class TodoList extends Component {
    render() {
        return (
            <div className="TodoList">
                <div className='spacer'>
                    {
                        _.times(10, i => i % 2 == 0 ?
                            <TodoCard key={i} tituloTodo={"todo: " + i} /> :
                            <div className='spacer' />)
                    }
                </div>
            </div>
        );
    }
}

export default TodoList;
