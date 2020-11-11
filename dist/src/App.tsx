import React from "react";
import "./App.css";
import TaskList from './components/TaskList/index'
import NewTask from './components/NewTask/index';
import Task from './components/Task/index'
function App() {
  return (
    <div>
      <NewTask/>
      <TaskList/>
      <Task/>
    </div>
  );
}

export default App;

