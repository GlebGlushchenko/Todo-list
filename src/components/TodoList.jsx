import React from 'react';
import TodoItem from './TodoItem';
import style from './style/TodoItem.module.css'

const TodoList =(props)=>{

    return(
        <div>
            <ul className={style.uls}>
                {props.todos.map((todo,index) =>{
                    return <TodoItem deleteTodo={props.deleteTodo} todo={todo} index={index} onChange={props.onChange}/>
                })}
            </ul>
        </div>
    )
}

export default TodoList