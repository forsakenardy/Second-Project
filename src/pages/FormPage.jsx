import supabase from "../supabase/config";

function FormPage() {
    return (
        <div className="form-content">
            <form className="formulary">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="faction">Faction</label>
                <input type="text" name="faction" id="faction" />

                <label htmlFor="class">Class</label>
                <input type="text" name="class" id="class" />

                <label htmlFor="lvl">Level</label>
                <input type="text" name="lvl" id="lvl" />

                <label htmlFor="icon">Icon URL</label>
                <input type="text" name="icon" id="icon" />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormPage;
