import React from 'react';


function Todo({todo, toggleComplete, removeTodo}){

    function handleCheckBoxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(){
        removeTodo(todo.id);
    }

    return(
        <div className='listItem' style={{display: 'flex'}}>
            <input type='checkbox' onClick={handleCheckBoxClick}/>
            <li className='list' style={{ textDecoration: todo.completed ? 'line-through' : null }}>{todo.task}</li>
            <button className='remove' onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Todo;