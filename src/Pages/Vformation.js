

import Header from "../Components/Header";
import '../css/formations.css'

import { useEffect,useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";







const Vformation = () => {

    const [vid,setVideos]=useState([]);
   
    const getVideos=async ()=>{
        const res= await axios.get("http://localhost:8000/get/videos");
        if (res.status==200) {
             console.log(res);
                 
             setVideos(res.data.data);
             console.log(vid);
        }
    }
    useEffect(()=>{
           getVideos();
    },[]);

    return ( <>
    
    
    
    <Header/>

<div className="mainf">
    
         <div className="mainformation">

            
                <h1>Les formations</h1>
           

            <div className="formations">
               
                
     {

vid.map((vd)=>(


    <div className="rock" key={vd._id} >

       <div class="v">
            <Link to={`/uvideo/${vd._id}`}>  <video >
               <source  src={`http://localhost:8000/uplloadvideos/${vd.urlv}`} />
                   </video> </Link>
       </div>
        <h2>{vd.nom_video}</h2>
        <p>description</p>
    </div> 


))
}

            </div>
            </div>          


    </div>
    
    
    
    </> );
}
 
export default Vformation;