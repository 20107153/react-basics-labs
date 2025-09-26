import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [taskState, setTaskState ] = useState({
    tasks : [
      { id: 1, title:"Dishes", description:"Empty Dishwasher", deadline:"Today", priority:"Low", done:"False"},
      { id: 2, title:"Laundry", description:"Fold clothes and put away", deadline:"Tomorrow", priority:"Medium", done:"False"},
      { id: 3, title: "Tidy up", deadline:"Today",priority:"High",done:"False"}
    ]
  })
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }
    const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 
  const [ formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Low"
  });

  const formChangeHandler = (event) => {
    let form = {...formState};
    switch(event.target.name) {
      case "Title":
        form.title = event.target.value;
        break;
      case "Description":
        form.description = event.target.value;
        break;
      case "Deadline":
        form.deadline = event.target.value;
        break;
      case "Priority":
        form.priority = event.target.value;
        break;
      default:
        form = formState;
    }
    setFormState(form);
  }
    const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }
  return (
      <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
      <Task
      title ={task.title}
      description={task.description}
      deadline={task.deadline}
      priority={task.priority}
      key={task.id}
      done={task.done}
      markDone={() => doneHandler(index)}
      deleteTask = {() => deleteHandler(index)}
      onChange={(event) => props.change(event)}
      />
      ))}
         <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
      console.log(formState);
    </div>
  );
}

export default App;