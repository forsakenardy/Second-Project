import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import Armament from './pages/Armament.jsx'
import Contact from './pages/Contact.jsx'
import supabase from './supabase/config.js'
import { Routes, Route, Link } from 'react-router-dom'
import Humanoid from './pages/Humanoid.jsx'
import Insectoid from './pages/Insectoid.jsx'


function App() {

  const [armament, setArmament] = useState([])
  const [insectoids, setInsectoids] = useState([])
  const [characters, setCharacters] = useState([])
  const [isPressed, setIsPressed] = useState(false);

  const toggleClass = () => {
    setIsPressed((prevState) => !prevState);
  };

  const getCharacters = async () => {
    const { data:characters, error } = await supabase.from("characters").select('*');
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
    const { data:insectoids, error } = await supabase.from("insectoids").select('*');
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
    const { data:armament, error } = await supabase.from("armament").select('*');
    if (error) {
      console.log("there was an error ", error);
      return;
    }
    else {
      console.log("data fetched succesfully: ", armament);
      setArmament(armament);
    }
  }


  useEffect(() => {
    getCharacters();
    getInsectoids();
    getArmament();
  }, [])

  return (
    <>
      <section className="NavBar">
        <Link to="/"><h2>HomePage</h2></Link>
        <button onClick={toggleClass} className='races-button'><h2>Races</h2></button>
        <Link to="/Store"><h2>Store</h2></Link>
        <Link to="/Contact"><h2>Contact</h2></Link>
        <img src="" alt="Game Icon" />
      </section>
      <div className={isPressed ? 'menu-displayed' : 'races-menu'}>
        <Link to="/humanoid"><h3 className='races'>Humanoid</h3></Link>
        <Link to="/insectoid"><h3 className='races'>Insectoid</h3></Link>
        </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Store' element={<Armament armament={armament} />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/humanoid' element={<Humanoid characters={characters}/>} />
        <Route path='/insectoid' element={<Insectoid insectoids={insectoids} />} />
      </Routes>

      <section className="Footer">
        <div>
          <h3>My Footer</h3>
        </div>
      </section>
    </>
  )
}

export default App
