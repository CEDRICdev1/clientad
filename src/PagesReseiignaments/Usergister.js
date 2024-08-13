

import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../css/usegister.css'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';


const Usergister = () => {


    const [user_name,setUser_name]=useState("");
    const [mail,setMail]=useState("");
    const [pass,setPass]=useState("");
    const [confi_pass,setConpass]=useState("")
const [v,setv]=useState([]);
  const navigate=useNavigate()

    const hanble= async(e)=>{
        e.preventDefault()
   
              const formdata=new FormData() ;
              formdata.append("user_name",user_name);
              formdata.append("email",mail);
              formdata.append("pass",pass);
              formdata.append("conpass",confi_pass);
             
              const confit={
                headers:{
                    "Content-Type":"application/json"
                }
              }

              const res=await axios.post("http://localhost:8000/register/uesr", formdata,confit);
                   if(res.status===200){
                    navigate('/userlogin')
                   }
               
               
                
              
             
    }

    return (  <>
    
          <div className="main">
                           
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
                          <li><Link to="/userlogin">Connexion</Link></li>
                       </ul>
                </div>
            </div> 
            </div>  

            <div className='section1'>
               <div className='loginUser'>
            
                     <form>
                       <div className='label'>
                          <label>Name_user</label>
                       </div>

                       <div className='inp'>
                        <input type="text" required onChange={(e)=>{setUser_name(e.target.value)}}  value={user_name}/>
                    </div>
                       
                    <div className='label'>
                          <label>Email</label>
                       </div>

                       <div className='inp'>
                        <input type="email"  required onChange={(e)=>{setMail(e.target.value)}}  value={mail}/>
                    </div>

                       <div className='label'>
                          <label>password</label>
                       </div>

                       <div className='inp'>
                        <input type="password" required onChange={(e)=>{setPass(e.target.value)}} value={pass}/>
                    </div>
                     
                     <div className='label' >
                        <label>confirme Password</label>
                     </div>
                     <div className='inp'>
                        <input type="password" required  onChange={(e)=>{
                            setConpass(e.target.value)
                        }} value={confi_pass}/>
                    </div>

                       <div className='buton'>
                          <a onClick={hanble} href=''> register</a>
                       </div>
                       
                      </form>
                               <p>Vous s'avez dedja compte? <Link className='link' to="/userlogin">Connexioin</Link></p>
                  
               </div>
            </div>

          </div>

          <Footer/>
    
    </>);
}
 
export default Usergister;