import React,{useState} from 'react';
import '../styles/NewTask.css';

const NewTask = (props) =>{
    const [task,setTask] = useState('');
    
    const handleChange = (e) =>{
        setTask(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.saveTask(task);
        setTask('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="new-todo" id="new-todo">
                <div className="round-new-todo">
                    <label className="new-todo-round" id="round-todo"></label>
                </div>
                <input type="text" value={task} autoComplete="off" onChange={handleChange} className="input-todo" id="input-todo" placeholder="Create a new Todo...."/>
            </div>
        </form>
        
    )
}

export default NewTask;