import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Component/Home/home';
import Registration from './Component/Registration/register';
import Courses from './Component/Courses/courses';
import Gallery from './Component/Gallery/gallery';
import Mern from './Component/Courses/mern';
import Mean from './Component/Courses/mean';
import Devops from './Component/Courses/devops';
// import FormDemo from './Component/FormDemo/form'
// import FormTask from './Component/FormTask/formTask5'


import './App.css';
import ContactUs from './Component/ContactUs/contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route  path="/Course" element={<Courses/>} />
    <Route  path="/Register" element={<Registration/>} />
    <Route  path="/Gallery" element={<Gallery/>} />
    <Route  path="/Contact" element={<ContactUs/>} />
    <Route  path="/mern" element={<Mern/>} />
    <Route  path="/mean" element={<Mean/>} />
    <Route path='/devops' element={<Devops/>}/>
      
      </Routes> 
     </div>
     </Router>
  );
}

export default App;
