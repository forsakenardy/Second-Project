import { useRef, useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import Armament from './pages/Armament.jsx'
import Users from './pages/Users.jsx'
import supabase from './supabase/config.js'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Humanoid from './pages/Humanoid.jsx'
import Insectoid from './pages/Insectoid.jsx'
import ArmamentInfo from './pages/ArmamentInfo.jsx'
import FormPage from './pages/FormPage.jsx'
import EditPage from './pages/EditPage.jsx'
import click from './assets/images/click.mp3'
import menu from './assets/images/menu-display.mp3'
import click2 from './assets/images/click2.mp3'
import robotsound from './assets/images/robot-sound.mp3'
import insectsound from './assets/images/insect-sound.mp3'
import logo from './assets/images/logo.png';



function App() {

  const [users, setUsers] = useState([])
  const [armament, setArmament] = useState([])
  const [insectoids, setInsectoids] = useState([])
  const [characters, setCharacters] = useState([])
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  

  const toggleClass = () => {
    setIsPressed((prevState) => !prevState);
  };
  const toggleClass2 = () => {
    setIsPressed2((prevState) => !prevState);
  };
  const toggleClass3 = () => {
    setIsPressed3((prevState) => !prevState);

  };

  const getCharacters = async () => {
    const { data: characters, error } = await supabase.from("characters").select('*');
    if (error) {
      console.log("there was an error ", error);
      return;
    }
    else {
      console.log("data fetched succesfully: ", characters);
      setCharacters(characters);
    }
  }
  const getInsectoids = async () => {
    const { data: insectoids, error } = await supabase.from("insectoids").select('*');
    if (error) {
      console.log("there was an error ", error);
      return;
    }
    else {
      console.log("data fetched succesfully: ", insectoids);
      setInsectoids(insectoids);
    }
  }
  const getArmament = async () => {
    const { data: armament, error } = await supabase.from("armament").select('*');
    if (error) {
      console.log("there was an error ", error);
      return;
    }
    else {
      console.log("data fetched succesfully: ", armament);
      setArmament(armament);
    }
  }
  const getUsers = async () => {
    const { data: users, error } = await supabase.from("Users").select('*');
    if (error) {
      console.log("there was an error ", error);
      return;
    }
    else {
      console.log("data fetched succesfully: ", armament);
      setUsers(users);
    }
  }


  useEffect(() => {
    getCharacters();
    getInsectoids();
    getArmament();
    getUsers();
  }, [])

  const audioRef = useRef(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const playSound = () => {
    audioRef.current.play();
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    playSound();
  };


  const audioRef2 = useRef(null);
  const [buttonClicked2, setButtonClicked2] = useState(false);

  const playSound2 = () => {
    audioRef2.current.play();
  };

  const handleButtonClick2 = () => {
    setButtonClicked2(true);
    playSound2();
  };

  const audioRef3 = useRef(null);
  const [buttonClicked3, setButtonClicked3] = useState(false);

  const playSound3 = () => {
    audioRef3.current.play();
  };

  const handleButtonClick3 = () => {
    setButtonClicked3(true);
    playSound3();
  };

  const audioRef4 = useRef(null);
  const [buttonClicked4, setButtonClicked4] = useState(false);

  const playSound4 = () => {
    audioRef4.current.play();
  };

  const handleButtonClick4 = () => {
    setButtonClicked4(true);
    playSound4();
  };


  const audioRef5 = useRef(null);
  const [buttonClicked5, setButtonClicked5] = useState(false);

  const playSound5 = () => {
    audioRef5.current.play();
  };

  const handleButtonClick5 = () => {
    setButtonClicked5(true);
    playSound5();
  };

  return (
    <>
      <section className="NavBar">
        <img onClick={() => {
          handleButtonClick()
          toggleClass2()
        }} className='hamburguer-menu' src="https://i.ibb.co/ScN7Vch/OIP-removebg-preview.png" alt="" />
        <div onClick={toggleClass2} className={isPressed2 ? 'navbar-menu' : "hidden"}>
          <NavLink onClick={handleButtonClick} to="/" className={({ isActive }) => isActive ? "selected" : ""}><h2>Home</h2></NavLink>
          <NavLink onClick={() => {
            toggleClass()
            handleButtonClick2()
            toggleClass3()
            toggleClass2()
          }}
            className={!isPressed3 ? 'races-button' : `races-button-big`} ><h2>Races</h2></NavLink>
          <NavLink onClick={handleButtonClick} to="/Store" className={({ isActive }) => isActive ? "selected" : ""}><h2>Store</h2></NavLink>
          <NavLink onClick={handleButtonClick} to="/Users" className={({ isActive }) => isActive ? "selected" : ""}><h2>Users</h2></NavLink>
        </div>
        <img className='my-logo' src={logo} alt="Game Icon" />
      </section>
      <div onClick={() => {
        toggleClass()
        toggleClass2()
        toggleClass3()
      }}
        className={`${isPressed ? 'menu-displayed' : 'races-menu'} ${!isPressed2 ? 'hidden2' : ''}`}
      >
        <Link onClick={handleButtonClick4} to="/humanoid"><h3 className='races'>Humanoid</h3></Link>
        <Link onClick={handleButtonClick5} to="/insectoid"><h3 className='races'>Insectoid</h3></Link>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Store' element={<Armament handleButtonClick3={handleButtonClick3} armament={armament} />} />
        <Route path='/Users' element={<Users users={users} handleButtonClick={handleButtonClick} setUsers={setUsers} />} />
        <Route path='/humanoid' element={<Humanoid characters={characters} />} />
        <Route path='/insectoid' element={<Insectoid insectoids={insectoids} />} />
        <Route path="/Store/armament-info/:weaponId" element={<ArmamentInfo
          getArmament={getArmament}
          handleButtonClick={handleButtonClick}
          armament={armament}
        />} />
        <Route path="/Users/FormPage" element={<FormPage users={users} setUsers={setUsers} handleButtonClick={handleButtonClick} handleButtonClick3={handleButtonClick3} getUsers={getUsers} />} />
        <Route path="/Users/:userId" element={<EditPage users={users} setUsers={setUsers} handleButtonClick={handleButtonClick} handleButtonClick3={handleButtonClick3} getUsers={getUsers} />} />
      </Routes>

      <section className="Footer">

        <h3>&copy; 2024 Developed by Arnaldo Mera Rojas</h3>
        <div className='footer-icons'>
          <a target="blank" href="https://www.linkedin.com/in/arnaldo-mera-rojas-webdev/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#D9D9D9" />
              <path d="M8.1 6.78261C8.1 7.58319 7.48333 8.23188 6.72222 8.23188C5.96111 8.23188 5.34444 7.58319 5.34444 6.78261C5.34444 5.98261 5.96111 5.33333 6.72222 5.33333C7.48333 5.33333 8.1 5.98261 8.1 6.78261ZM8.11111 9.3913H5.33333V18.6667H8.11111V9.3913ZM12.5456 9.3913H9.78556V18.6667H12.5461V13.7977C12.5461 11.0904 15.8956 10.869 15.8956 13.7977V18.6667H18.6667V12.7936C18.6667 8.22551 13.71 8.39188 12.5456 10.6406V9.3913Z" fill="#1F1F1F" />
            </svg>
          </a>
          <a target="blank" href="https://github.com/forsakenardy/Second-Project">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M12.668 24.5C19.2954 24.5 24.668 19.1274 24.668 12.5C24.668 5.87258 19.2954 0.5 12.668 0.5C6.04055 0.5 0.667969 5.87258 0.667969 12.5C0.667969 19.1274 6.04055 24.5 12.668 24.5Z" fill="#D9D9D9" />
              <path d="M12.668 4.5C8.25064 4.5 4.66797 8.17255 4.66797 12.7022C4.66797 16.3263 6.95997 19.4007 10.1393 20.4855C10.5386 20.5614 10.668 20.3071 10.668 20.0911V18.5641C8.44264 19.0603 7.9793 17.5962 7.9793 17.5962C7.6153 16.6482 7.09064 16.396 7.09064 16.396C6.36464 15.8868 7.14597 15.8977 7.14597 15.8977C7.9493 15.9551 8.37197 16.7432 8.37197 16.7432C9.0853 17.9968 10.2433 17.6345 10.7 17.4247C10.7713 16.895 10.9786 16.5327 11.208 16.3283C9.4313 16.1198 7.5633 15.4165 7.5633 12.2744C7.5633 11.3783 7.87597 10.6469 8.3873 10.0727C8.30464 9.86563 8.03064 9.03106 8.4653 7.90188C8.4653 7.90188 9.1373 7.68179 10.666 8.74261C11.304 8.56079 11.988 8.46989 12.668 8.46647C13.348 8.46989 14.0326 8.56079 14.672 8.74261C16.1993 7.68179 16.87 7.90188 16.87 7.90188C17.3053 9.03174 17.0313 9.86632 16.9486 10.0727C17.462 10.6469 17.772 11.3789 17.772 12.2744C17.772 15.4247 15.9006 16.1185 14.1193 16.3215C14.406 16.5758 14.668 17.0747 14.668 17.8403V20.0911C14.668 20.3091 14.796 20.5655 15.202 20.4848C18.3786 19.3987 20.668 16.3249 20.668 12.7022C20.668 8.17255 17.086 4.5 12.668 4.5Z" fill="#1F1F1F" />
            </svg>
          </a>
        </div>
        <audio ref={audioRef} src={click} />
        <audio ref={audioRef2} src={menu} />
        <audio ref={audioRef3} src={click2} />
        <audio ref={audioRef4} src={robotsound} />
        <audio ref={audioRef5} src={insectsound} />
      </section>
    </>
  )
}

export default App
