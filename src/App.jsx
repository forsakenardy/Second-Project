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

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    const { data, error } = await supabase.from("characters").select();
    if (error) {
      console.log("there was an error ", error);
      return;
    }
    else {
      console.log("data fetched succesfully: ", data);
      setCharacters(data);
    }
  }

  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <>
      <section className="NavBar">
        <Link to="/"><h2>HomePage</h2></Link>
        <h2>Races</h2>
        <Link to="/Store"><h2>Store</h2></Link>
        <Link to="/Contact"><h2>Contact</h2></Link>
        <img src="" alt="Game Icon" />
      </section>
      <div className='races-menu'>
        <Link to="/humanoid"><h3>Humanoid</h3></Link>
        <Link to="/insectoid"><h3>Insectoid</h3></Link>
        </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Store' element={<Armament />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/humanoid' element={<Humanoid />} />
        <Route path='/insectoid' element={<Insectoid />} />
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
