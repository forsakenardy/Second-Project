import { Link } from "react-router-dom";
import supabase from "../supabase/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditPage({ getUsers, handleButtonClick, handleButtonClick3 }) {
    const { userId } = useParams();
    const [editUsers, setEditUsers] = useState({
        Name: "",
        faction: "",
        Class: "",
        lvl: 1,
        icon: ""
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const { data, error } = await supabase
                .from('Users')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) {
                console.log("Error fetching user data:", error);
            } else {
                setEditUsers(data);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleInputs = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setEditUsers({
            ...editUsers,
            [field]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('Users')
            .update(editUsers)
            .eq('id', userId);

        if (error) {
            console.log("Error updating user:", error);
            return;
        } else {
            console.log("User updated successfully");
            getUsers();
        }
    };

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
                icon: "https://i.ibb.co/qjKcLX3/usuario-removebg-preview.png"
            }));
        }
    }, [editUsers.faction]);

    return (
        <div className="form-content">
            <form onSubmit={handleSubmit} className="formulary">
                <label className="label-name" htmlFor="Name">Edit Profile</label>
                <input onChange={handleInputs} placeholder="Edit User Name" name="Name" value={editUsers.Name} type="text" maxLength="18" />
                <label className="label-faction" htmlFor="faction">
                    <select onChange={handleInputs} name="faction" value={editUsers.faction}>
                        <option value="">-- None --</option>
                        <option value="Insectoid">Insectoid</option>
                        <option value="Humanoid">Humanoid</option>
                    </select>
                </label>

                <button onClick={handleButtonClick3} className="submit" type="submit">Submit</button>
                <Link onClick={handleButtonClick} to="/Users"><button className="back-back">Go back</button></Link>
            </form>
        </div>
    );
}

export default EditPage;
