import { Link } from "react-router-dom";
import '../css/header.css'
const Header = () => {
    return ( <>
          
          <header>
       
        <div class="heade">
            <div class="logo">
                <img src="/IMAGE/LOGOS IMINEM PRODUCTION.png"/>
            </div>
            <div class="menu">
                <h1><span>I</span>MINEM <span>P</span>RODUCTION</h1>
                <ul>
                    <li><Link to="/">Accuiel</Link></li>
                    <li><Link to="/mesprojet">Mes Projets</Link></li>
                    <li><Link to="/formation">Formations</Link></li>
                    <li><Link to="/userlogin">Connexion</Link></li>
                </ul>
            </div>
        </div>
    </header>
    
    </> );
}
 
export default Header;