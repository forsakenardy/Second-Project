import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ArmamentInfo.css"

function ArmamentInfo({ armament, getArmament, handleButtonClick }) {
    const { weaponId } = useParams();
    const navigate = useNavigate();

    const [weaponIndex, setWeaponIndex] = useState(null);
    const [weaponCard, setWeaponCard] = useState(null);
    const [prevIndex, setPrevIndex] = useState(null);
    const [nextIndex, setNextIndex] = useState(null);

    useEffect(() => {
        getArmament(); 
    }, [getArmament]);// if getArmament doesn't change and is only used to fetch data when the component mounts, the dependency array can be left empty like so [].

    useEffect(() => {
        if (armament.length > 0) {
            const currentIndex = armament.findIndex((weapon) => weapon.id === Number(weaponId));
            setWeaponIndex(currentIndex);
            setWeaponCard(armament[currentIndex]);
        }
    }, [armament, weaponId]); // nice use of the dependency array. 💪

    useEffect(() => {
        if (weaponIndex !== null) {
            setPrevIndex(weaponIndex === 0 ? armament.length - 1 : weaponIndex - 1);
            setNextIndex(weaponIndex === armament.length - 1 ? 0 : weaponIndex + 1);
        }
    }, [weaponIndex, armament.length]);

    if (weaponIndex === null || weaponCard === null) {
        return <div>Loading...</div>;
    }

    /* 
    The prev next functions can be converted into a single function that takes a parameter to determine if the user wants to go to the previous or next weapon.
    const navigateToWeapon = (index) => {
        navigate(`/Store/armament-info/${armament[index].id}`);
    };

    so, when you call the function, you can pass -1 to go to the previous weapon and 1 to go to the next weapon.
    */

    const prev = () => {
        navigate(`/Store/armament-info/${armament[prevIndex].id}`);
    };

    const next = () => {
        navigate(`/Store/armament-info/${armament[nextIndex].id}`);
    };

    return (
        <div className="full-armament-page-2">
            <div key={weaponCard.id} className="humanoid-card">
                <div className="div-armament">
                    <h1 className="character-name">{weaponCard.name}</h1>
                    <ul className="info-card">
                        <li><h3>Type: {weaponCard.type}</h3></li>
                        <li><h3>Class: {weaponCard.class}</h3></li>
                        <li><h3>Attack Range: {weaponCard["attack range"]}</h3></li>
                        <li><h3>Rate of Fire: {weaponCard["Rate of fire"]}</h3></li>
                        <li><h3>DPS: {weaponCard.dps}</h3></li>
                        <li><h3>Description: {weaponCard.description}</h3></li>
                    </ul>
                    <div className="armament-info-buttons">
                        <button onClick={handleButtonClick} className="buy">Buy</button>
                        <div>
                            <button className="prevnext" onClick={() => {
                                prev()
                                handleButtonClick()
                            }}>
                                Prev</button>
                            <button className="prevnext" onClick={() => {
                                next()
                                handleButtonClick()
                            }}>
                                Next</button>
                        </div>

                    </div>

                </div>
                <img className="humanoid-image" src={weaponCard.image} alt="imagen del Armamento" />
            </div>
        </div>
    );
}

export default ArmamentInfo;
