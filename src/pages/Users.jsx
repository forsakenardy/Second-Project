import React from 'react';
import supabase from "../supabase/config";
import { Link } from 'react-router-dom';
import "../styles/Users.css"

function Users({ users, setUsers, handleButtonClick }) {

    const deleteUser = async (id) => {
        // good job with the delete function. 👍
        const { error } = await supabase
            .from("Users")
            .delete()
            .eq("id", id);

        if (error) {
            console.log("something", error);
        }
        else {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        }
    };

    return (
        <div className="user-page">
            <div className='user-card-content'>
                <div className='user-table'>
                    <h3>User</h3>
                    <h3>Faction</h3>
                    <h3>Type of User</h3>
                    <h3>level</h3>
                </div>
                {
                    users.map((user) => {
                        return (
                            <div className="user-card" key={user.id}>
                                <div>
                                    <div>
                                        <img className="user-img" src={user.icon} alt="asd" />
                                        <h3 className="user-name">{user.Name}</h3>
                                    </div>
                                    {/* 
                                    only on "editMode"
                                    <input type="text" value={user.Name} /> 
                                    */}
                                    <h3 className="user-faction">{user.faction}</h3>
                                    <h3 className="user-class">{user.Class}</h3>
                                    <h3 className="user-lvl">{user.lvl}</h3>
                                </div>
                                <Link onClick={handleButtonClick} to={`/Users/${user.id}`} >
                                    <img
                                        className="delete-user"
                                        src="https://i.ibb.co/PwhzHvD/edit.png"
                                        alt="edit"
                                    />
                                </Link>
                                <img
                                    className="delete-user"
                                    onClick={() => deleteUser(user.id)}
                                    src="https://i.ibb.co/89gvYp2/delete.png"
                                    alt="Delete"
                                />

                            </div>
                        )
                    })
                }
            </div>
            <Link to="/Users/FormPage">
                <button onClick={handleButtonClick} className="form-link">Create new user</button>
            </Link>
        </div>
    );
}

export default Users;
