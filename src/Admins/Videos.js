import { useState,useEffect } from "react";
import axios from 'axios';


const Videos = () => {

 const [id,setId]=useState([]);
const [idf,setIdf]=useState();
const [file,setFile]=useState("");
const [titre,setTire]=useState("");

const getiDformation=async()=>{
         
     const res=await axios.get('http://localhost:8000/getId/formations');

     if (res.status===200) {
        setId(res.data.data)
     }
     console.log(id);
     
}

useEffect(()=>{
    getiDformation()
},[]);

const handle=async(e)=>{
    e.preventDefault();

       let formdata=new FormData();

       formdata.append('idv',idf);
       formdata.append('titrev',titre);
       formdata.append('videos',file);

       const confit={
        headers:{
            "Content-Type":"multipart/form-data",
        }
    }

       const resp=await axios.post('http://localhost:8000/resgister/videos',formdata,confit);
       if(resp.status===200){
        console.log(resp);
       }
}

    return ( <>
       
           <div>
                <form>
                    <div><label>ID FORMATION</label></div>
                    <div>
                        <select onChange={(e)=>{setIdf(e.target.value)}} name="idv">
                            <option>choisir</option>
                            {
                                id.map((idf)=>(
                                    <option key={idf._id} >{idf._id}</option>
                                ))
                            }
                        </select>
                    </div>
                        <div>
                            <label>Nom video</label>
                        </div>

                        <div>
                            <input type="txt" onChange={(e)=>{setTire(e.target.value)}} name="titrev"/>
                        </div>
                        <div>
                            <label>video</label>
                        </div>

                        <div>
                            <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} name="videos"/>
                        </div>
                    <div>
                        <button onClick={handle}>Uploadv</button>
                    </div>
                </form>
           </div>

    </> );
}
 
export default Videos;