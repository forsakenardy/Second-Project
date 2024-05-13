import supabase from "../supabase/config";

function Insectoid({ insectoids }) {
    return (
        <>
            {
                insectoids.map((insectoid) => {
                    return (
                        <>
                            <div key={insectoid.id} className="humanoid-card">
                                <div>
                                    <h1 className="character-name">{insectoid.name}</h1>
                                    <ul className="info-card">
                                        <li><h2 >Description:</h2> <h3 className="info">{insectoid.description}</h3></li>
                                        <li><h2 >Background History:</h2><h3 className="info">{insectoid['Background-Story']}</h3></li>
                                    </ul>
                                </div>
                                <img className="humanoid-image" src={insectoid.image} alt="" />

                            </div>
                        </>

                    )
                }
                )
            }
        </>
    )
}


export default Insectoid