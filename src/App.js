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
  const addTask=songName=>updateTask([...task,{songName,movieName:"album",like:0}]);
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
      like:52,
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
      like:31,
      songName:"Naanga vera maari",
      movieName:"valimai",
      clicked:false
    },
    {
      id:5,
      like:25,
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
                <b style={{color:"deeppink",fontSize:"18px"}}>{task.like}</b>&nbsp;
                <button disabled={task.clicked} onClick={()=>addCount(1,index)} className="likebutton" >
                <i class="material-icons" >thumb_up</i></button>&emsp;
              </div>
              
            <div>
              <h3 style={{color:"black"}}> {task.songName}</h3>
              <p style={{marginTop:"10px"}}>{task.movieName}</p>
            </div>
            <div class="dropdown">
              <span><i class="material-icons" >keyboard_arrow_down</i></span>
              <div class="dropdown-content">
              <p><button  onClick={()=>removetask(index)}><i class="material-icons" >delete</i></button></p>
              </div>
            </div>
            </div>
          
          
        ))}
      <AddTask addTask={addTask}/> 
    </div>
  );
}
//<button  onClick={()=>removetask(index)}><i class="material-icons" >delete</i></button>
export default App;
