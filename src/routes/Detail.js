import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail(){
  const {id} = useParams();
  const getMoive = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json(); 
    console.log(json)
  };
  useEffect(()=>{
    getMoive();
  },[])
 return (    
    <h1>detail</h1>
 )
}
export default Detail;