import './App.css';
import profile from './assets/Profile.jpeg';
import React, {useState, useRef} from "react";
import IntroVideo from './assets/sample_video.mp4'
import BgVideo from './assets/videoplayback.mp4'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import CopyToClipboardButton  from './components/CopyToClipboardButton/CopyToClipboardButton'
import background from './assets/bg.avif'
import Education from './components/education/education'

function App() {
  const [colorChange, setColorchange] = useState(false);
    
    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
      // document.execCommand('copy');
      // This is just personal preference.
      // I prefer to not show the whole text area selected.
      e.target.focus();
      setCopySuccess('Copied!');
    };
  
  
  return (
    <div>
      <div className={
                    colorChange
                        ? "navbar-solid"
                        : "navbar"
                }>
        <h1>Kuljeet Singh Bhengura</h1>
      </div>
      <div className="App" style={{ backgroundImage: `url(${background})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                    }}>
        
        <header className="App-header">
          <video className="video-profile" 
            controls
            src={IntroVideo}
            playing
            poster = {profile}
            type="video/mp4" />
          <p className='font-bold'>
            Goal in life: Make society better place with the help of technology.
          </p>
          <div>
            <a
              className="link"
              href="https://www.linkedin.com/in/kuljeet-singh-bhengura/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>
            <span>  </span>
            <a
              className="link"
              href="https://github.com/Kuljeet1998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <span>  </span>
            <CopyToClipboardButton text="kbhengura@gmail.com" icon="email" /><span>  </span>
            <CopyToClipboardButton text="+15713318626" icon="phone" />
          </div>
      
        </header>
      </div>
      <div onScroll={changeNavbarColor}></div>
      <div className='new-section div-center'>
        <Education />
      </div>
      <div className='new-section'>

      </div>
    </div>
  );
}

export default App;
