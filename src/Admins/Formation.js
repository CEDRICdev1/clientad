import {useState} from 'react'
import axios from 'axios';

const Formation = () => {

  const [nomf ,setNomf]=useState("");
  const [desf,setDesf]=useState("");
  const [file,setFile]=useState("");

  const handle= async(e)=>{
   e.preventDefault()
   let formdata=new FormData();

   formdata.append('nomf',nomf);
   formdata.append('desf',desf);
   formdata.append('photo',file);

   const confit={
       headers:{
           "Content-Type":"multipart/form-data",
       }
   }

   const res= await axios.post('http://localhost:8000/register',formdata,confit);
   
  }

return ( 

      <div className="ajouter">
             
      <h1> Ajouter un bloc</h1>

<div className="form" >
<form>
       <div className="l">
        <label>nom</label>
       </div>

       <div className="in">
           <input type="txt" name="nomf" onChange={(e)=>{setNomf(e.target.value)}}/>
       </div>

       <div className="l">
        <label>description</label>
       </div>

       <div className="in">
          <textarea name="desf" onChange={(e)=>{setDesf(e.target.value)}}></textarea>
       </div>

       <div className="l">
        <label>file</label>
       </div>

       <div className="in">
           <input type="file" name="photo"  onChange={(e)=>{setFile(e.target.files[0])}}/>
       </div>

       <div className="b">
        <button onClick={handle} >Upload-Product</button>
       </div>
</form>

</div>

      </div>
   
);
}

 
export default Formation;