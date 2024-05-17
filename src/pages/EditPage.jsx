import { Link } from "react-router-dom";
import supabase from "../supabase/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Form2.css"

function EditPage({ users, setUsers, getUsers }) {
    const { userId } = useParams();
    const [editUsers, setEditUsers] = useState({
        Name: "",
        faction: "",
        Class: "",
        lvl: 1,
        icon: ""
    });

    const handleInputs = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setEditUsers({
            ...editUsers,
            [field]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase.from('Users').update(editUsers).eq('id', userId);
        if (error) {
            console.log("something", error);
            return
        }
        else {
            console.log("bla");
            setEditUsers({
                Name: "",
                faction: "",
                typeOfUser: "",
                lvl: 1,
                icon: "",
            })
            getUsers()
        }
    }
    useEffect(() => {
        if (editUsers.faction === "Insectoid") {
            setEditUsers((prevState) => ({
                ...prevState,
                icon: "https://i.ibb.co/njrj8yH/OIG4-removebg-preview.png"
            }));
        } else if (editUsers.faction === "Humanoid") {
            setEditUsers((prevState) => ({
                ...prevState,
                icon: "https://i.ibb.co/JcD75YT/OIG3-removebg-preview.png"
            }));
        } else {
            setEditUsers((prevState) => ({
                ...prevState,
                icon: ""
            }));
        }
    }, [editUsers.faction]);

    return (
        <div className="form2-content">
            <form onSubmit={handleSubmit} className="formulary2">
                <label className="label-name2" htmlFor="Name">Edit Profile</label>
                <input onChange={handleInputs} placeholder="Edit User Name" name="Name" value={editUsers.Name} type="text" />
                <label className="label-faction2" htmlFor="faction">
                    <select onChange={handleInputs} name="faction" value={editUsers.faction}>
                        <option value="">-- None --</option>
                        <option value="Insectoid">Insectoid</option>
                        <option value="Humanoid">Humanoid</option>
                    </select>
                </label>
                <input onChange={handleInputs} placeholder="Edit Status" name="Class" value={editUsers.Class} type="text" />
                <button className="submit2" type="submit">Submit</button>
                <Link to="/Users"><button className="back-back2">Go back</button></Link>
            </form>
        </div>
    )
}

export default EditPage;