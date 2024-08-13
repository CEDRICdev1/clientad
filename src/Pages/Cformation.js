
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';


const Cformaation = () => {


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



    return ( <>
    
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
                          <li><a href="/">deconnexion</a></li>
                       </ul>
                </div>
            </div> 
            </div>



    <div className="mainf">
                
                <div className="mainformation">

                   
                       <h1>Les formations</h1>
                  

                   <div className="formations">
                      
                       
            
       


           <div className="rock">

              <div class="v">
                   <Link to="/userlogin"> 
                   <img  src='IMAGE/back.png'/>
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 

           
           <div className="rock">

              <div class="v">
                   <Link > 
                   <img   src=''/> 
                     </Link>
              </div>
               <h2>nom</h2>
               <p>cete formation porte sur la concetion graphique avec photoshop</p>
           </div> 


    

                   </div>
                   </div>          


           </div> 

           
 <Footer/>
    
    
    
    </> );
}
 
export default Cformaation;