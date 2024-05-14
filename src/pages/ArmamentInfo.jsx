import React from "react";
import { useParams } from "react-router-dom";


function ArmamentInfo({ armament }) {

    const { weaponId } = useParams();
 
    const weaponCard = armament.find((weapon) => weapon.id === Number(weaponId));


    return (
        <div className="full-armament-page">    


            <div key={weaponCard.id} className="humanoid-card">
                <div className="div-armament">
                    <h1 className="character-name">{weaponCard.name}</h1>
                    <ul className="info-card">
                        <li><h3>Type: {weaponCard.type}</h3></li>
                        <li><h3>Class: {weaponCard.class}</h3></li>
                        <li><h3>Attack Range: {weaponCard["attack range"]}</h3></li>
                        <li><h3>Rate of Fire: {weaponCard["Rate of fire"]}</h3></li>
                        <li><h3>DPS: {weaponCard.dps}</h3></li>
                        <h3>Description: {weaponCard.description}</h3>
                    </ul>

                </div>
                <img className="humanoid-image" src={weaponCard.image} alt="imagen del Armamento" />
            </div>
           
        </div>
    );
}

export default ArmamentInfo;
