import supabase from "../supabase/config";
import { Link } from 'react-router-dom';

function Users({ users, setUsers }) {

    const deleteuser = userId => {
        const filteredUser = users.filter(user => user.id !== userId);
        return setUsers(filteredUser)
    }
    return (
        <>
            <div className="user-page">
                {
                    users.map((user) => {
                        return (
                            <>
                                <div className="user-card">
                                    <img className="user-img" src={user.icon} alt="asd" />
                                    <h3 className="user-name">{user.Name}</h3>
                                    <h3 className="user-faction">{user.faction}</h3>
                                    <h3 className="user-class">{user.Class}</h3>
                                    <h3 className="user-lvl">{user.lvl}</h3>
                                    <img className="delete-user"  onClick={() => deleteuser(user.id)} src="https://cdn-icons-png.flaticon.com/512/8568/8568248.png" alt="" />
                                </div>
                            </>
                        )
                    })
                }
                <Link to="/Users/FormPage" ><button className="form-link">Create new user</button></Link>
            </div>
        </>
    )
}

export default Users