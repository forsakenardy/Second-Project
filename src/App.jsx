import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import Armament from './pages/Armament.jsx'
import Users from './pages/Users.jsx'
import supabase from './supabase/config.js'
import { Routes, Route, Link } from 'react-router-dom'
import Humanoid from './pages/Humanoid.jsx'
import Insectoid from './pages/Insectoid.jsx'
import ArmamentInfo from './pages/ArmamentInfo.jsx'
import FormPage from './pages/FormPage.jsx'


function App() {

  const [users, setUsers] = useState([])
  const [armament, setArmament] = useState([])
  const [insectoids, setInsectoids] = useState([])
  const [characters, setCharacters] = useState([])
  const [isPressed, setIsPressed] = useState(false);

  const toggleClass = () => { 
    setIsPressed((prevState) => !prevState);
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

  return (
    <>
      <section className="NavBar">
        <div className='navbar-menu'>
          <Link to="/"><h2>Home</h2></Link>
          <Link className='races-button' onClick={toggleClass} ><h2>Races</h2></Link>
          <Link to="/Store"><h2>Store</h2></Link>
          <Link to="/Users"><h2>Users</h2></Link>
        </div>
        <img className='my-logo' src="https://i.ibb.co/YcWStDk/logo.png" alt="Game Icon" />
      </section>
      <div onClick={toggleClass} className={isPressed ? 'menu-displayed' : 'races-menu'}>
        <Link to="/humanoid"><h3 className='races'>Humanoid</h3></Link>
        <Link to="/insectoid"><h3 className='races'>Insectoid</h3></Link>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Store' element={<Armament armament={armament} />} />
        <Route path='/Users' element={<Users users={users} setUsers={setUsers} />} />
        <Route path='/humanoid' element={<Humanoid characters={characters} />} />
        <Route path='/insectoid' element={<Insectoid insectoids={insectoids} />} />
        <Route path="/Store/armament-info/:weaponId" element={<ArmamentInfo getArmament={getArmament} armament={armament} />} />
        <Route path="/Users/FormPage" element={<FormPage users={users} setUsers={setUsers} />} />
      </Routes>

      <section className="Footer">

        <h3>&copy; 2024 Developed by Arnaldo Mera Rojas</h3>
        <div className='footer-icons'>
          <img className='icons-footer' src="https://i.ibb.co/NpYjCtr/Gmail-Logo-PNG-HD-1.png" alt="" />
          <img className='icons-footer' src="https://i.ibb.co/GCyS0CC/OIP-1-removebg-preview.png" alt="" />
        <a target="blank" href="https://github.com/forsakenardy/Second-Project"><img className='icons-footer' src="https://i.ibb.co/L9w8D8D/OIP-removebg-preview.png" alt="" /></a> 
        </div>

      </section>
    </>
  )
}

export default App
