import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


const AddTask=({addTask})=>{
  const[value,updatevalue]=useState("");
  const handlesubmit= e =>{
    e.preventDefault();
    if(value!=="")
    {
      addTask(value);
      updatevalue("");
    }
  }
  return(
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter song to add"
        onChange={e=>updatevalue(e.target.value)}/>
      <button type="submit" className="button"><i class="material-icons">add</i></button>
    </form>
  )
}
const App=() =>
{
  const addTask=songName=>updateTask([...task,{songName,like:0}]);
  const [searchTerm,setsearchTerm]=useState("");
  const[task,updateTask]=useState([
    {
      id:1,
      like:25,
      songName:"kutty story",
      movieName:"master",
    },
    {
      id:2,
      like:100,
      songName:"vaathi coming",
      movieName:"master",
      clicked:false
    },
    {
      id:3,
      like:10,
      songName:"para para paramasundari",
      movieName:"album",
      clicked:false
    },
    {
      id:4,
      like:8,
      songName:"Naanga vera maari",
      movieName:"valimai",
      clicked:false
    },
    {
      id:5,
      like:1,
      songName:"survivor",
      movieName:"vivegam",
      clicked:false
    }
  ]);
  const removetask=index=>
  {
    const newTask=[...task];
    newTask.splice(index,1);
    updateTask(newTask);
  }
  const [disable, setDisable] = useState(false);
  const addCount=(n,index)=>
  {
    let newTask=[...task]
    newTask[index].like+=n;
    newTask[index].clicked=true;
    updateTask(newTask);
  };
  const able=()=>
  {
    if(disable===true)
    {
      console.log("called...");
      setDisable(false)
    }
  };
 
  
  return(
    <div className="list-of-songs">
      <div className="search">
     <input 
       type="text"
       placeholder="Search for a song"
       onChange={(event) =>{
         setsearchTerm(event.target.value);
       }}
       ></input>
        <button> <i class="material-icons" >search</i></button>
       </div>
     
      {task.filter((val)=>{
        if(searchTerm =="")
        {
          return val
        }else if(val.songName.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
        
      }).map((task,index)=>(
        <div className="music-status">
          <div>
          <i class="material-icons" >play_arrow</i>&emsp;
          <button disabled={task.clicked} onClick={()=>addCount(1,index)} className="likebutton"><i class="material-icons" >thumb_up</i></button>&emsp;{task.like}
          
          </div>
          
          {task.songName}
          <button  onClick={()=>removetask(index)}><i class="material-icons" >delete</i></button> 
          </div>
          
      ))}
      <AddTask addTask={addTask}/> 
    </div>
  );
}
export default App;
