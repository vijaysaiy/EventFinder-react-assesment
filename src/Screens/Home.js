import {React,useState,useEffect} from "react";
import Events from "../Components/Events";
import Operations from "../Components/Operations";
import {getFeaturedEvents} from "../server-api/apiCalls"
function Home() {

const [events,setEvents] = useState([]);

let button = false;
useEffect(() => {
    const getApiData = async () =>{
      const data = await getFeaturedEvents();      
      if(data) setEvents(data);
    }
    getApiData();
},[])

  return (
    <div className="container" style = {{maxWidth:"1500px"}} >
      <h1 className="title my-5">Featured Events </h1>
      <div className="row justify-content-center">
        {events.map((items) => {
          return (
            <Events items={items} button={button}/>
          );
        })}
      </div>
      <Operations />
    </div>
  );
}

export default Home;
