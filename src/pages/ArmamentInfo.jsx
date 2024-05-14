import React from "react";
import { useParams } from "react-router-dom";


function ArmamentInfo({ armament }) {

    const { weaponId } = useParams();
 
    const weaponCard = armament.find((weapon) => weapon.id === Number(weaponId));


    return (
        <div className="full-armament-page">    
        { weaponCard &&

            (<div key={weaponCard.id} className="humanoid-card">
                <div className="div-armament">
                    <h1 className="character-name">{weaponCard.name}</h1>
                    <ul className="info-card">
                        <li><h3>Tipo: {weaponCard.type}</h3></li>
                        <li><h3>Clase: {weaponCard.class}</h3></li>
                        <li><h3>Rango de Ataque: {weaponCard["attack range"]}</h3></li>
                        <li><h3>Tasa de Fuego: {weaponCard["Rate of fire"]}</h3></li>
                        <li><h3>DPS: {weaponCard.dps}</h3></li>
                        <li><h3>Rango de Ataque: {weaponCard["attack range"]}</h3></li>
                        <h3>Descripción: {weaponCard.description}</h3>
                    </ul>

                </div>
                <img className="humanoid-image" src={weaponCard.image} alt="imagen del Armamento" />
            </div>)
            }
        </div>
    );
}

export default ArmamentInfo;
