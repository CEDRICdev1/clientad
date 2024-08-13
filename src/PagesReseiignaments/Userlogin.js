import {useState} from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/userlogin.css'
import Footer from '../Components/Footer';





const Userlogin = () => {


    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
const [loading,setLoading]=useState(true);
const [load,setLoad]=useState(true);

const [token,setToken]=useState([])

const navigate=useNavigate();



    
    const handle=async(e)=>{
        e.preventDefault();

              if(!email || !pass){
                   setLoading(false);
              }else if(!email.includes('@')){
                     setLoad(false)
              }else{

                  const formdata=new FormData();
                  formdata.append('mail',email);
                  formdata.append('pass',pass);

                  const hconfit={
                    headers:{
                        "Content-Type":"application/json"
                    }
                  }

               const res=await Axios.post("http://localhost:8000/login/user",formdata,hconfit)
                          
                 

                 if(res.status===200) {
                  
                        localStorage.setItem('t',res.data.token);
                      
                          setTimeout(()=>{
                            navigate('/connect')
                           },1000)
                 }else if(res.status===422){
                    console.log("entrer les informations correctes!");
                 }
                

               
              }   
     }
   


    return ( 


          <>
<div className='main'>

          <div className='section'>
            <div className="userHeader">
                  <div className="Hlogo">
                       <img src="/IMAGE/LOGOS IMINEM PRODUCTION.png"/> 
                  </div>
                  <div className='menu'>
                          <h1><span>I</span>MINEM <span>P</span>RODUCTION</h1>
                        <ul>
                          <li><Link to="/">Accuiel</Link></li>
                          <li><Link to="/mesprojet">Mes Projets</Link></li>
                          <li><Link to="/formation">Formations</Link></li>
                          <li><Link to="/register">Resgister</Link></li>
                       </ul>
                </div>
            </div> 
            </div>   
              




            <div className='section1'>
               <div className='loginUser'>
            
                     <form>
                       <div className='label'>
                          <label>Email</label>
                       </div>

                       <div className='inp'>
                          <input type="email" required onChange={(e)=>{setEmail(e.target.value)}} name='mail'/>
                       </div>

                       <div className='label'>
                          <label>password</label>
                       </div>

                       <div className='inp'>
                          <input type="password" onChange={(e)=>{setPass(e.target.value)}} name='pass'/>
                       </div>

                       <div className='buton'>
                          <a onClick={handle} href=''> login</a>
                       </div>
                       
                      </form>
                               <p>Vous n'avez pas de compte? <Link className='link' to="/register">Resgister</Link></p>
                  
               </div>
            </div>

            </div>

            <Footer/>
          </>


     );
}
 
export default Userlogin;