
import React from 'react';
import Todo from './todo'

function TodoList({todos, toggleComplete, removeTodo}){
    return(
        <ul className='theList'>
            {todos.map(todo => (<Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />))}
        </ul>
    );
}

export default TodoList;