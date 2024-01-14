import React,{useState} from "react";
import './../styles/App.css';

/*const list = [
  {
    id:1,
    title: "Learn React"
  },
  {
    id:2,
    title: "Learn Java"
  },
  {
    id:3,
    title: "Learn Python"
  },
  {
    id:4,
    title: "Learn React"
  },
]*/


const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);//[{ id:1,title: "Learn React"},{id:2,title: "Learn Java"},{id:3,title: "Learn Python"}],
  const [id, setId] = useState(1); // 
  console.log(id)

  console.log(toDoList)
 function addToDo(e){
  e.preventDefault()
 // let last_element = toDoList[toDoList.length-1] || {id:0}
 setToDoList([...toDoList, {id:id, title:toDo }])
  //setToDo([...toDoList, {id:last_element.id+1, title:toDo}])
  setToDo("")
  setId(id+1)
 }
 ////[{ id:1,title: "Learn React"},{id:2,title: "Learn Java"},{id:3,title: "Learn Python"}],
 function deleteToDo(delete_id){
  /*let newToDoList = []
  for(let t of toDoList){
    if(t.id != delete_id){
      newToDoList.push(t)
    }
  }*/
  setToDoList(toDoList.filter((item) => item.id !== delete_id))
 }
  
  return (
    <div>
      <h1>To-Do List</h1>
       <form onSubmit={addToDo}>
        <input type="text" placeholder="Enter to do"
        onChange={(event)=>setToDo(event.target.value)}
        />
        <button type="submit">Add to do</button>
       </form>
       
       <ul>
        {toDoList.map((item)=>{
          return <li key={item.id}>
            {item.title}
            <button onClick={()=>deleteToDo(item.id)}> Delete </button>
         
          </li>
        })}
       </ul>
    </div>
  )
}

export default App