import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';

const Uvideo = () => {
const {id}=useParams()



    return (<>
    
    
    bonjoiur le monde
   <h1> sdfdfdfdgf{id}</h1>

    
                       <video controls>  
                            <source  src={`http://localhost:8000/video/${id}`} />
                       </video> 
        
          
        
    
   
    </>  );
}
 
export default Uvideo;