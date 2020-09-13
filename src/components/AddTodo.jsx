import React, {useState} from 'react';
import style from './style/AddTodo.module.css'

const useInputValue=(defaultValue ='')=>{
    const [value,setValue] =useState('')
    return{
        bind:{
            value,
            onChange:event => setValue(event.target.value)
        },
        value:()=>value,
        clear:()=>setValue('')

    }
}

const AddTodo =(props)=>{
    const input =useInputValue('')
    const submitHandler =(event)=>{
        event.preventDefault()
        if(input.value().trim()){
            props.onCreate(input.value())
            input.clear()
        }
    }

    return(
        <form className={style.form} onSubmit={submitHandler}>
            <input className={style.input} {...input.bind}/>
            <button className={style.btn} type={'submit'}>add Todo</button>
        </form>
    )
}

export default AddTodo