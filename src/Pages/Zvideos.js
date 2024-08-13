import { useEffect,useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";

const Zvideos = () => {
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
       
           <div>
               
                 {

                vid.map((vd)=>(
                    <div key={vd._id}>
                        
                     
                       <Link to={`/uvideo/${vd._id}`}>  <video>
                            <source  src={`http://localhost:8000/uplloadvideos/${vd.urlv}`} />
                       </video> </Link>

                       <h1>{vd.nom_video}</h1>
                    </div>
                ))
            }
           </div>
    
    </> );
}
 
export default Zvideos;