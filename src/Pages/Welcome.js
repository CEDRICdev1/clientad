
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../css/welcome.css'
const Welcome = () => {
    return ( 
    <>
        <Header/>

          <div className='main' style={{backgroundImage:'url(/IMAGE/Backgroun.jpg)'}}>
         
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
      <div className='main2'>
             
      <div className='bloc2'>
           

            
                <div className='p'>
                    <p>Merci de vous coonecter<br/> afin de ne rater aucune de nos offres promotionnelle!</p>
                </div>
                <div className='L'>
                    <Link className='LL' to='/userlogin'>SE CONNECTER</Link>
                </div>
            
         </div>

      </div>
    
      <Footer/> 
    </> );
}
 
export default Welcome;