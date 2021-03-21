import React,{useState} from 'react';
import Task from './Task';
import '../styles/Tasks.css';

const Tasks = (props) =>{

    const [statusAll, setStatusAll] = useState(false);
    const [statusActiveCompleted, setStatusActiveCompleted] = useState(false);
    const [selectAll,setSelectAll] = useState(false);
    const [selectActive,setSelectActive] = useState(false);
    const [selectCompleted,setSelectCompleted] = useState(false);

    const styleAll = () =>{
        return selectAll?'select-all':null;
    }
    const styleActive = () =>{
        return selectActive?'select-all':null;
    }
    const styleCompleted = () =>{
        return selectCompleted?'select-all':null;
    }

    const clickActive = () =>{
        setStatusAll(true);
        setStatusActiveCompleted(false);

        setSelectActive(true);
        setSelectAll(false);
        setSelectCompleted(false);
    }

    const clickAll = () =>{
        setStatusAll(false);

        setSelectActive(false);
        setSelectAll(true);
        setSelectCompleted(false);
    }

    const clickCompleted = () =>{
        setStatusAll(true);
        setStatusActiveCompleted(true);

        setSelectActive(false);
        setSelectAll(false);
        setSelectCompleted(true);
    }

    const clickClearCompleted = () =>{
        props.cleanCompleted();
    }

    const stateTask = () =>{
        const listTask = (task)=><Task deleteTask={props.deleteTask} ligth={props.ligth} updateState={props.updateState} key={task.name} task={task}/>

        if(!statusAll){
            return props.tasks.map(listTask);
        }else{
            if(!statusActiveCompleted){
                return props.tasks.filter((task)=>task.status === false).map(listTask)
            }else{
                return props.tasks.filter((task)=>task.status === true).map(listTask)
            }
        }
    }

    const countActives = () =>{
        const active = props.tasks.filter((task)=>!task.status);
        return active.length;
    }

    return(
        <>
            <div className="tasks" id="tasks">
                {stateTask()}
                <div className="task-actions" id="task-actions">
                    <p><span>{countActives()} items left</span></p>
                    <div className="task-state">
                        <p className={styleAll()} onClick={clickAll} id="all"><span>All</span></p>
                        <p className={styleActive()} onClick={clickActive} id="active"><span>Active</span></p>
                        <p className={styleCompleted()} onClick={clickCompleted} id="completed"><span>Completed</span></p>
                    </div>
                    <p onClick={clickClearCompleted}><span>Clear Completed</span></p>
                </div>
            </div>
            <div className="to-do-footer" id="todo-footer">
                <p className={styleAll()} onClick={clickAll} id="all"><span>All</span></p>
                <p className={styleActive()} onClick={clickActive} id="active"><span>Active</span></p>
                <p className={styleCompleted()} onClick={clickCompleted} id="completed"><span>Completed</span></p>
            </div>
            <div className="footer-description">
                <p><span>Drag and drop to reorder list</span></p>
            </div>
        </>
    )
}

export default Tasks;