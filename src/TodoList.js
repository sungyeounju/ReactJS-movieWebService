import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value)
  const onSubmit = (e)=> {
    e.preventDefault();
    console.log(toDo);
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo,...currentArray])
    setToDo("")
  };
  return (
  <>
  <h1>My Todos ({toDos.length})</h1>
  <form action="" onSubmit={onSubmit}>
    <input value={toDo} onChange={onChange} type="text" placeholder="write" />
    <button>add to do</button>
  </form>
  <hr />
  <ul>
  {toDos.map((item,index) => <li key={index}>{item}</li>)}
  </ul>
  
  
  </>  
  )
}

export default App;
