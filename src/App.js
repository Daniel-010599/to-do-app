import './App.css';
import React,{useEffect, useState} from 'react';
import NewTask from './components/NewTask';
import Tasks from './components/Tasks';
import Switch from './components/Switch';

function App() {

    const [tasks, setTasks] = useState([
        {'status':false,'name':'Aprendiendo React js'},
        {'status':false,'name':'Aprendiendo Javascript'}
    ]);

    const [ligth,setLigth] = useState(false);

    useEffect(()=>{
        let data = localStorage.getItem('tasks');
        if(data!==null){
            setTasks(JSON.parse(data));
        }else{
            setTasks([
                {'id':0,'status':false,'name':'Aprendiendo React js'},
                {'id':1,'status':false,'name':'Aprendiendo Javascript'}
            ])
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }, [tasks])

    const saveTask = (taskName) =>{
        const repeat = tasks.filter(task=>task.name === taskName);

        if(taskName === ''){
            return tasks
        }else if(repeat.length >= 1){
            return tasks;
        }else{
            const nTask = {id:tasks.length,status:false,name:taskName};
            setTasks([...tasks,nTask]);
        }
    };

    const cleanCompleted = () =>{
        const taskActives= tasks.filter((task)=>!task.status);
        setTasks(taskActives);
    }

    const darkLigth = () =>{
        setLigth(!ligth);
    }

    const bannerDarkLigth = () =>{
        if(!ligth){
            return <div className="container-banner"></div>;
        }else{
            return <div className="container-banner"></div>;
        }
    }

    const updateState = (taskItem) =>{
        const uState = tasks.map(task=>{
            if(task.id === taskItem.id){
                task.status = !task.status
            }return task
        });
        setTasks(uState);
    };

    const deleteTask = (taskItem) =>{
        const dTask = tasks.filter((task)=>task.id !== taskItem.id);
        setTasks(dTask);
    }
    
  return (
    <div className="content">
        {bannerDarkLigth()}
        <div className="todo">
            <Switch ligth={ligth} darkLigth={darkLigth}/>
            <NewTask saveTask={saveTask}/>
            <Tasks deleteTask={deleteTask} cleanCompleted={cleanCompleted} ligth={ligth} updateState={updateState}  tasks={tasks}/>
        </div>
    </div>
  );
}

export default App;
