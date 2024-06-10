import supabase from "../supabase/config";
import "../styles/Humanoid.css"

function Humanoid({ characters }) {
    return (
        <div className="humanoid-card2">
            {
                characters.map((character) => {
                    return (
                        <>
                            <div key={character.id} className="humanoid-card">
                                <div>
                                    <h1 className="character-name">{character.name}</h1>
                                    <ul className="info-card">
                                        <li><h2 >Description:</h2> <h3 className="info">{character.description}</h3></li>
                                        <li><h2 >Background History:</h2><h3 className="info">{character['Background-Story']}</h3></li>
                                    </ul>
                                </div>
                                <img className="humanoid-image" src={character.image} alt="" />

                            </div>
                        </>

                    )
                }
                )
            }
        </div>


    )
}

export default Humanoid;
