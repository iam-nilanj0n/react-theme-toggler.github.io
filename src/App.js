
// import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import sun from './asset/sun.png';
import moon from './asset/moon.png';
// import Axios from 'axios';


const toggleLightTheme = {
  backgroundImage: 'linear-gradient(180deg, blue, rgb(0, 166, 255), rgb(171, 226, 255))'
}

const toggleDarkTheme = {
  backgroundImage: 'linear-gradient(180deg, rgb(0, 11, 61), rgb(0, 20, 109))'
}

const sunInLight = {
  visibility: 'visible',
  transition: '0.075s',
  transform: 'translateY(0)'
}

const sunInDark = {
  visibility: 'hidden',
  transition: '0.075s',
  transform: 'translateY(3vh)'
}
const moonInLight = {
  visibility: 'hidden',
  transition: '0.075s',
  transform: 'translateY(-3vh)'
}

const moonInDark = {
  visibility: 'visible',
  transition: '0.075s',
  transform: 'translateY(0)'
}

function App() {
  const [theme, setTheme] = useState('light');
  const [toggleTheme, setToggleTheme] = useState(toggleLightTheme);
  //  background and paragraph theme setting
  const [backNparaTheme, setBackNparaTheme] = useState([{
    backgroundColor: 'rgb(223, 223, 223)'
  }, {
    color: 'black'
  }]);
  // sun ans moon button themes
  const [sunTheme, setSunTheme] = useState(sunInLight)
  const [moonTheme, setMoonTheme] = useState(moonInLight)


  const themeChangeHandler = (e, Theme) => {
    if (Theme === 'light') {
      setTheme('dark');
      setToggleTheme(toggleDarkTheme)
      setBackNparaTheme([{
        backgroundColor: 'rgb(67, 67, 67)',
        transition: '0.5s'
      }, {
        color: 'white',
        transition: '0.5s'
      }])
      setSunTheme(sunInDark)
      setMoonTheme(moonInDark)
    }

    if (Theme === 'dark') {
      setTheme('light');
      setToggleTheme(toggleLightTheme);
      setBackNparaTheme([{
        backgroundColor: 'rgb(223, 223, 223)',
        transition: '0.5s'
      }, {
        color: 'black',
        transition: '0.5s'
      }])
      setSunTheme(sunInLight)
      setMoonTheme(moonInLight)
    }

  }
  return (
    <div className="App" style={backNparaTheme[0]}>

      <div className='toggleBox' style={toggleTheme}>
        <button  onClick={(e) => themeChangeHandler(e, 'light')} style={sunTheme} className='iconButton sunButton'>
          <img src={sun} alt='icon' className='icon' />
        </button>
        <button onClick={(e) => themeChangeHandler(e, 'dark')} style={moonTheme} className='iconButton moonButton' >
          <img src={moon} alt='icon' className='icon' />
        </button>
      </div>

      <p style={backNparaTheme[1]}>It's a {theme} theme!</p>
      <div className='extraDiv'>
        <p style={backNparaTheme[1]} className='extraPara'>Sun is visible in light</p>
        <p style={backNparaTheme[1]} className='extraPara'>Moon is visible in dark</p>
      </div>
    </div>
  );
}

export default App;
