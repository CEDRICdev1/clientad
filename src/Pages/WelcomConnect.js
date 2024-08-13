import Axios from 'axios';
import { useEffect} from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Footer from "../Components/Footer";



const WelcomConnect = () => {
    const navigate=useNavigate()



  
    const connect= async()=>{
        const token=localStorage.getItem('t');
        if (!token) {
           
       setTimeout(()=>{
           navigate('/')
       },1000)
        }else{
            
           
   
            const res= await Axios.get("http://localhost:8000/connect",{
               headers:{
                  
                   Authorization:token,
               }
            });

            if(res.status===200){

               
                 
              
              console.log(res)
                   
              
            }
            
          
           
             
     
            
        }
        
     
   }

  useEffect(()=>{
       connect()
   },[]);



    const deconnect=()=>{
        localStorage.removeItem('t')
         if(!localStorage.getItem('t')){
            navigate('/')
         }
    }
    return (<>
    
    

    <div className='section'>
            <div className="userHeader">
                  <div className="Hlogo">
                       <img src="/IMAGE/LOGOS IMINEM PRODUCTION.png"/> 
                  </div>
                  <div className='menu'>
                          <h1><span>I</span>MINEM <span>P</span>RODUCTION</h1>
                        <ul>
                          <li><Link to="/welcome">Accuiel</Link></li>
                          <li><Link to="/mesprojet">Mes Projets</Link></li>
                          <li><Link to="/cformation">Formations</Link></li>
                          <li><a href="/"  onClick={deconnect}>deconnexion</a></li>
                       </ul>
                </div>
            </div> 
            </div>  

            <div className='main' style={{backgroundImage:'url(/IMAGE/back.png)'}}>
         
         <div class="TEXT">
            <h2>BIENVENU</h2>
            <h2>DANS CE SITE D'INITIATION AU MONTAGE VIDEOS</h2>
            <h2>ET AUX METIERS AUDIO VISEUL</h2>
         </div>

<div class="bloc" >
                <div class="rok">
                     <div class="rokv">
                        <a href="accuiel.html"><img src="/IMAGE/2504965.png"/></a>
                     </div>
                     <p>video d'initiation</p>
                </div>

                <div class="rok">
                    <div class="rokv">
                       <a href="accuiel.html"><img src="/IMAGE/254412.png"/></a>
                    </div>
                    <p>video d'initiation</p>
               </div>
         </div>

         <div className='LIENS'>
                <div className='lienA'>
                    <ul>
                        <li><div className='l'><a href=''>Formation gratuite sur Adobe PREMIER PRO</a></div></li>
                        <li><div className='l'><a href=''>Formation gratuite sur Adobe PHOTOSHOP</a></div></li>
                        <li><div className='l'><a href=''>Formation gratuite sur Adobe AFTER EFFECT</a></div></li>
                    </ul>
                </div>
                <div className='lienB'>
                    <ul>
                        <li><div className='l'><a href=''>PACK EFFET IMAGES GRATUITE</a></div></li>
                        <li><div className='l'><a href=''>PACK EFFET VIDEOS GRATUITE</a></div></li>
                        
                    </ul>
                </div>
            </div>
         


        
      </div>
        <Footer/>
    
    </>  );
}
 
export default WelcomConnect;