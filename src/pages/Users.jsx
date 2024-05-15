import React from 'react';
import supabase from "../supabase/config";
import { Link } from 'react-router-dom';
import "../styles/Users.css"

function Users({ users, setUsers }) {

    const deleteUser = async (id) => {
        const { error } = await supabase
            .from("Users")
            .delete()
            .eq("id", id);

        if (error) {
            console.log("something", error);
        } else {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        }
    };

    return (
        <div className="user-page">
            <div className='user-card-content'>
                {
                    users.map((user) => {
                        return (
                            <div className="user-card" key={user.id}>
                                <img className="user-img" src={user.icon} alt="asd" />
                                <h3 className="user-name">{user.Name}</h3>
                                <h3 className="user-faction">{user.faction}</h3>
                                <h3 className="user-class">{user.Class}</h3>
                                <h3 className="user-lvl">{user.lvl}</h3>
                                <img
                                    className="delete-user"
                                    onClick={() => deleteUser(user.id)}
                                    src="https://cdn-icons-png.flaticon.com/512/8568/8568248.png"
                                    alt="Delete"
                                />
                            </div>
                        );
                    })
                }
            </div>
            <Link to="/Users/FormPage">
                <button className="form-link">Create new user</button>
            </Link>
        </div>
    );
}

export default Users;
