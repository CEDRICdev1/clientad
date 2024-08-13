import Header from "../Components/Header";
import Footer from '../Components/Footer';
import '../css/formations.css'

import { useEffect,useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";

const Formations = () => {


  /*  const [vid,setVideos]=useState([]);
   
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
    },[]);*/

    return ( <>
        <Header/>

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
 
export default Formations;