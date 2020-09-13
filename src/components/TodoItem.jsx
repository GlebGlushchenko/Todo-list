import React from 'react';
import style from './style/TodoItem.module.css'


const TodoItem =(props)=>{
    return(
        <li className={props.todo.completed ? style.active :''}>
            <input className={style.input} type="checkbox" onChange={()=>props.onChange(props.todo.id)}/>
            <strong className={style.strong}>{props.index +1}</strong>
            <span className={style.span}>
                {props.todo.title}
            </span>

            <button className={style.btn} onClick={()=>{
                props.deleteTodo(props.todo.id)
            }}>x</button>

        </li>
    )
}

export default TodoItem