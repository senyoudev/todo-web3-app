import { useState,useEffect } from 'react';
import './App.css';
import { ethers } from "ethers";
import TaskCreator from './components/TaskCreator';
import TaskList from './components/TaskList';
import todo from './data.json'
function App() {

  const addresss = "0x3DC97d6dd8980924916d4D1B84DfE40a8E5B11bA"
  const [todoList,setTodoList] = useState([])
  const [ids,setIds] = useState([])

  const getTasks = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(addresss, todo, provider);
    let tasks = []
    
    for(let i=1;i<ids.length+1;i++) {
      tasks[i-1] = await erc20.getTaskById(i)
    }
    setTodoList(tasks)
  }

  useEffect(() => {
    const getIds = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(addresss, todo, provider);
    const idss = await erc20.getTaskIds();
    setIds(idss)
    getTasks()
    }
    getIds()
  },[ids])




  const handleToggle = async(id) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const erc20 = new ethers.Contract(addresss, todo, signer);
    await erc20.toggleDone(id)
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoList(mapped);
  }

  const addTask = async(title,author) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const erc20 = new ethers.Contract(addresss, todo, signer);
    await erc20.createTask(title,author);
    let copy = [...todoList];
    copy = [...copy, await erc20.getTaskById(ids.length)];
    console.log(await erc20.getTaskById(ids.length))
    console.log(copy)
    setTodoList(copy);
   
  }
  return (
    <div className="App">
        <h1 className="app__title">
          ToDo List 3.0
        </h1>
        <button onClick={() => getTasks()}>click</button>
        <TaskCreator addTask={addTask}/>
        <TaskList  Tasks={todoList} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
