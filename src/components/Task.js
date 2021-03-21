import React from 'react';
import '../styles/Task.css';

const Task = (props) =>{

    const taskStatus = () =>{
        if(!props.ligth){
            return {textDecoration:props.task.status?'line-through':'none',color:props.task.status?'#4e5168':'#aaacc4'}
        }else{
            return {textDecoration:props.task.status?'line-through':'none',color:props.task.status?'#c7c8ce':'#6f6f7e'}
        }
    }
    
    return(
        <div className="task" id="task">
            <div className="task-left">
                <div className="round" id="round">
                    <input checked={props.task.status} onChange={()=>props.updateState(props.task)} type="checkbox" id={props.task.name}/>
                    <label className="check" id="check" htmlFor={props.task.name}></label>
                </div>
                <h2 id="title-task" style={taskStatus()}>{props.task.name}</h2>
            </div>
            
            <a href="/" onClick={()=>props.deleteTask(props.task)} className="task-delete">
                <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="0.1px" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </a>
        </div>
    )
}
export default Task;