import { Link } from "react-router-dom";

function EditPage() {

    return (
        <div className="form-content">
            <form className="formulary">
            <label className="label-name" htmlFor="Name">Edit Profile</label>
                <input  placeholder="Edit User Name" type="text" />
                <select name="faction">
                        <option value="">-- None --</option>
                        <option value="Insectoid">Insectoid</option>
                        <option value="Humanoid">Humanoid</option>
                    </select>
                <input  placeholder="Edit User Name" type="text" />
                <button className="submit" type="submit">Submit</button>
                <Link to="/Users"><button className="back-back">Go back</button></Link>
            </form>
        </div>
    )
}

export default EditPage;