
import { useEffect} from 'react';
import { useState } from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/connect.css'
import Footer from '../Components/Footer';
import Cfooter from '../Components/Cfooter';




const Connect = () => {
    const [user,setUser]=useState([]);
    const [formation,setFormation]=useState([]);
    const navigate=useNavigate()
    

    /* fonction de verification de connexion*/ 
    const connect= async()=>{
         const token=localStorage.getItem('t');
         
         if (!token) {
            
        setTimeout(()=>{
            navigate('/')
        })
         }else{
             
            
    
             const res= await Axios.get("http://localhost:8000/connect",{
                headers:{
                   
                    Authorization:token,
                }
             });

             if(res.status===200){

                
                  
                setUser(res.data.data);
                setFormation(res.data.forma)
               console.log(res.data.data)
                    
               
             }
             
           }  

         
    }


 /* {
            formation.map((forme)=>(
                <div key={forme._id}>
                  <h1>{forme.titre}</h1>
                  <p>{forme.description}</p>
                  <img src={`http://localhost:8000/upload/${forme.urlf}`}/>
                </div>
            ))
           } 

            <div>
                  <p>{user.name_user}</p>
             <p>{user._id}</p>
             <p>{user.email_user}</p>
             <p>{user.user_pass}</p>
                  </div>
      */


  /* useEffect(()=>{
        connect()
    },[]);*/


/*  fonction de deconnexion */
    const deconnect=()=>{
        localStorage.removeItem('t')
         if(!localStorage.getItem('t')){
            navigate('/')
         }
    }






    return ( 
        <>
    

    <div className='section'>
            <div className="userHeader">
                  <div className="Hlogo">
                       <img src="/IMAGE/LOGOS IMINEM PRODUCTION.png"/> 
                  </div>
                  <div className='men'>
                          <h1><span>I</span>MINEM <span>P</span>RODUCTION</h1>
                        <ul>
                          <li><Link to="/welcome">Accuiel</Link></li>
                          <li><Link to="/mesprojet">Mes Projets</Link></li>
                          <li><Link to="/cformation">Formations</Link></li>
                          <li><a href="/">deconnexion</a></li>
                       </ul>
                </div>
                <div className="mlogo" >
                     <Link><img  src="/IMAGE/LOGOS IMINEM PRODUCTION.png" /></Link>
                </div>
            </div> 
            </div>

            <div className='div'>
                   
                    
                     <p>Nos formations</p>
                       
            </div>
   <Cfooter/>
           

           



 
</>          
    );
}
 
export default Connect;