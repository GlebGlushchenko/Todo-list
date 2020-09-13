import React, {useEffect, useState} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Preloader from './Preloader/Preloader';
import style from './style/Todo.module.css'
import logo from '../list.png'



const Todo = ()=>{
    const [todos, setTodos] = useState([])
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
                setLoading(!loading)
            })
    },[])

    const onChange= (todoId)=>{
        console.log(todoId)
        setTodos(todos.map(todo =>{
            if(todo.id === todoId){
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const deleteTodo =(id)=>{
        setTodos(todos.filter(t=>t.id !==id ))
    }

    const onCreate=(title)=>{
        setTodos(todos.concat([{
            title: title,
            id: Date.now(),
            completed: false
        }]))
    }

    return(
        <div className={style.container}>
            <div className={style.todoWrapper}>
                <img className={style.img} src={logo}/>
                <h1 className={style.title}>Todo list</h1>
                <AddTodo onCreate={onCreate}/>
                    {loading && <Preloader/>}
                    {todos.length ?(
                    <TodoList setTodos={setTodos} todos={todos} deleteTodo={deleteTodo} onChange={onChange}/>)
                    :(loading ? null: <p>У вас нет ToDO</p>)}
         </div>
        </div>


    )
}

export default Todo