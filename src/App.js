import logo from './logo.svg';
import './App.css';

import {Route,Routes} from 'react-router-dom';

import Connect from './Pages/Connect';
import Formation from './Admins/Formation';
import Videos from './Admins/Videos';
import Zvideos from './Pages/Zvideos';
import Welcome from './Pages/Welcome';


import Uvideo from './Pages/Uvideo';
import Formations from './Pages/Formations';

import Userlogin from './PagesReseiignaments/Userlogin';
import Usergister from './PagesReseiignaments/Usergister';
import WelcomConnect from './Pages/WelcomConnect';
import Cformaation from './Pages/Cformation';
function App() {
  return (
    <>
    

        <Routes>
           <Route path='/register' exact element={<Usergister/> }/>

           
           <Route path='/connect' element={<Connect/>}/>
           <Route path='/' element={<Welcome/>}/>
           <Route path='/welcome' element={<WelcomConnect/>}/>

           <Route path='/admin/formations' element={<Formation/>}/>
           <Route path='/admin/videos' element={<Videos/>}/>

           <Route path='/admin/zvideos' element={<Zvideos/>}/>
           <Route path='/uvideo/:id' element={<Uvideo/>}/>

           <Route path='/formation' element={<Formations/>}/>
           <Route path='/cformation' element={<Cformaation/>}/>

           <Route path='/userlogin' element={<Userlogin/>}/>

        </Routes> 
 

    </>
  );
}

export default App;
