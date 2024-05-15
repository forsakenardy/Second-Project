import supabase from "../supabase/config";
import { Routes, Route, Link } from 'react-router-dom';
import ArmamentInfo from "./ArmamentInfo";
import "../styles/Armament.css"

function Armament({ armament }) {


    return (
        <div className="full-armament-page">
            {
                armament.map((weapon) => {
                    return (
                        <>
                            <Link key={weapon.id} to={`/Store/armament-info/${weapon.id}`}>
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

