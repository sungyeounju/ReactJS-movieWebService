import styles from "./App.module.css";
import {useState, useEffect} from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev)=>prev+1);
  const onChange = (e) => setKeyword(e.target.value)
  useEffect(()=>{
    console.log("I run only Once")
  },[])
  useEffect(()=>{
    console.log("keyword changes")
  },[keyword])
  useEffect(()=>{
    console.log("keyword counter")
  },[counter])
  useEffect(()=>{
    console.log(keyword,counter)
  },[keyword,counter])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here" />
      <h1 className={styles.title}>welcome back</h1>
      <span>{counter}</span>
      <button onClick={onClick}>clickME</button>
    </div>
  );
}

export default App;
