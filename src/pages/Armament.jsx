import supabase from "../supabase/config";

function Armament({ armament }) {


    return (
        <div className="full-armament-page">
            {
                armament.map((weapon) => {
                    return (
                        <>
                            <div key={weapon.id} className="armament-card">
                                <img className="armament-image" src={weapon.image} alt="image of the Armament" />
                                <h1 className="weapons-name">{weapon.name}</h1>
                            </div>
                        </>

                    )
                }
                )
            }

       </div>
    )
}

export default Armament

//<div className="armament-info">
//<h1 className="weapons-name">{weapon.name}</h1>
//<ul>
//    <li><h3>Type: {weapon.type}</h3></li>
//    <li><h3>Class: {weapon.class}</h3></li>
//    <li><h3>Attack Range: {weapon["attack range"]}</h3></li>
//    <li><h3>Rate of Fire: {weapon["Rate of fire"]}</h3></li>
//    <li><h3>DPS: {weapon.dps}</h3></li>
//    <li><h3>Attack Range: {weapon["attack range"]}</h3></li>
//</ul>
//<h3>Description: {}</h3>
//</div>