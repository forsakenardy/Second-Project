// Remember to delete variables that are not being used.
import supabase from "../supabase/config"; // supabase is not being used.
import { Routes, Route, Link } from 'react-router-dom'; // Routes and Route are not being used.
import ArmamentInfo from "./ArmamentInfo"; // ArmamentInfo is not being used.
import "../styles/Armament.css"

function Armament({ armament, handleButtonClick3 }) {


    return (
        <div className="full-armament-page">
            {
                armament.map((weapon) => { // you can also destructure the weapon object here. ({id, name, image})
                    return (
                        <> {/* You can remove this fragment if you already have a single element that wraps everything */}
                            <Link onClick={handleButtonClick3} key={weapon.id} to={`/Store/armament-info/${weapon.id}`}>
                                <div className="armament-card">
                                    <img className="armament-image" src={weapon.image} alt="image of the Armament" />
                                    <h1 className="weapons-name">{weapon.name}</h1>
                                </div>

                            </Link>
                        </>

                    )
                }
                )
            }

        </div>
    )
}

export default Armament

