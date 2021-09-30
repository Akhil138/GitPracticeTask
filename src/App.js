
import './App.css';


import Alumni from './Components/Alumni';
import AppDownload from './Components/AppDownload';
import Awards from './Components/Awards';
import Bootcamp from './Components/Bootcamp';
import Footer from './Components/Footer/Footer';
import Graduate from './Components/Graduate';
import Navbar from './Components/Navbar';
import Partner from './Components/Partner';
import Supporting from './Components/Supporting';

import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="app">
      {/* Navbar Component */}

      <Navbar/>

      {/* Home Page Banner */}
      <div className="home__banner">
        <div className="container">
          <div className="home__bannerLeft">
            <h1>World's #1 <br /> Online Bootcamp</h1>
            <ul>
              <li><b>2,000,000</b> careers advanced</li>
              <li><b>1,500</b> live classes every month</li>
              <li><b>85%</b> report career benefits including promotion or a new job</li>
            </ul>
            <a href="/" className="btn" style={{color:"#fff" , background:"#118aef", padding:"0.6rem 1.8rem", fontSize:"1.2rem", textDecoration:"none", borderRadius:"0.5rem", fontWeight:"500"}}>Explore Programs</a>
          </div>
          <div className="home__bannerRight">
            <div className="videoBx">
              <ReactPlayer  url="https://www.youtube.com/watch?v=UVCP4bKy9Iw" width="200" muted="" controls=""/>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Section Component */}
      <Partner/>

      {/* Graduate Section Component */}
      <Graduate/>

      {/* BootCamp Component */}
      <Bootcamp/>

      {/* Reviews / Alumni Component */}
      <Alumni/>

      {/* Supporting Companies Component */}
      <Supporting/>

      {/* Awars Component */}
      <Awards/>

      {/* Download Section Component */}
      <AppDownload/>

      {/* Footer Section Component */}
      <Footer/>
    </div>
  );
}

export default App;
