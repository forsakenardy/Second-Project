import supabase from "../supabase/config";

function Users({ users }) {
    return (
        <>
            {
                users.map((user) => {
                    return (
                        <>
                            <div className="user-card">
                                <img className="user-img" src={user.icon} alt="asd" />
                                <h3 className="user-name">{user.Name}</h3>
                                <h3 className="user-faction">{user.faction}</h3>
                                <h3 className="user-class">{user.Class}</h3>
                                <h3 className="lvl">{user.lvl}</h3>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Users