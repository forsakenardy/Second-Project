import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function FormPage({ users, setUsers }) {
    const [newUser, setNewUser] = useState({
        Name: "",
        faction: "",
        Class: "Player",
        lvl: 1,
        icon: "",
        id: String(Math.floor(Math.random() * 10000000))
    });

    const handleInputs = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setNewUser({
            ...newUser,
            [field]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([newUser, ...users]);
        setNewUser({
            Name: "",
            faction: "",
            Class: "Player",
            lvl: 1,
            icon: "",
            id: String(Math.floor(Math.random() * 10000000))
        });
    };

    useEffect(() => {
        if (newUser.faction === "Insectoid") {
            setNewUser((prevState) => ({
                ...prevState,
                icon: "https://i.ibb.co/njrj8yH/OIG4-removebg-preview.png"
            }));
        } else if (newUser.faction === "Humanoid") {
            setNewUser((prevState) => ({
                ...prevState,
                icon: "https://i.ibb.co/JcD75YT/OIG3-removebg-preview.png"
            }));
        } else {
            setNewUser((prevState) => ({
                ...prevState,
                icon: ""
            }));
        }
    }, [newUser.faction]);

    return (
        <div className="form-content">
            <form onSubmit={handleSubmit} className="formulary">
                <label htmlFor="Name">Name</label>
                <input onChange={handleInputs} type="text" value={newUser.Name} name="Name" />

                <label htmlFor="faction">
                    Faction
                    <select name="faction" value={newUser.faction} onChange={handleInputs}>
                        <option value="">-- None --</option>
                        <option value="Insectoid">Insectoid</option>
                        <option value="Humanoid">Humanoid</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
                <Link to="/Users"><button className="back-back">Go back</button></Link>
            </form>
        </div>
    );
}

export default FormPage;
