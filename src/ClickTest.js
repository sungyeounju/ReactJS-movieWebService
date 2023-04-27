
import {useState, useEffect} from "react";

function Hello(){
  function byeFun(){
    console.log("destoryed :(")
  }
  function hiFun (){
    console.log("created :)");
    return byeFun;
  }
  useEffect(hiFun,[])
  return <h1>hello</h1>
}
function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
