import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import supabase from "../supabase/config";
import "../styles/Form.css"

function FormPage({ users, setUsers , getUsers }) {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.from("Users").insert([newUser]);
        if (error) {
            console.log("un error", error);
            return
        }
        else {
            console.log("user created");
            setNewUser({
                Name: "",
                faction: "",
                Class: "Player",
                lvl: 1,
                icon: "",
                id: String(Math.floor(Math.random() * 10000000))
            });
            getUsers();
        };
    }

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
                <label className="label-name" htmlFor="Name">New User</label>
                <input onChange={handleInputs} placeholder="Full Name" type="text" value={newUser.Name} name="Name" />
                <label className="label-faction" htmlFor="faction">
                    <select name="faction" value={newUser.faction} onChange={handleInputs}>
                        <option value="">-- None --</option>
                        <option value="Insectoid">Insectoid</option>
                        <option value="Humanoid">Humanoid</option>
                    </select>
                </label>
                <button className="submit" type="submit">Submit</button>
                <Link to="/Users"><button className="back-back">Go back</button></Link>
            </form>
        </div>
    );
}
export default FormPage;
