import { useState } from 'react';
import './App.css';
import Faq from './components/Faq';
import FooterCustom from './components/FooterCustom';
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import ShowHostel from './components/ShowHostel';
function App() {
  const [flatspage , setflatpage] = useState(true);
  const [OpenHostel , setOpenHostel] = useState(false);
  return (
    <div className=' h-auto'>
    <Navbar/>
    <HeroPage setflatpage ={setflatpage} setOpenHostel ={setOpenHostel}/>
    <Section1/>
    {
      OpenHostel === true && <ShowHostel/>
    }
    <Section2/>
    <Section3 flatspage={flatspage}/>
    <Faq/>
    <FooterCustom/>
    </div>
  );
}

export default App;
