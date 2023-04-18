import "./style.css";

const AddForm = (props) => {
    const { name, setName, lastname, setLastname, position, setPosition, saveInput } = props;
    return (
        <form className="addinput-homeadmin" onSubmit={saveInput} >
        <h3>Create User here</h3>
        <div className="input-homeadmin">
            <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
            <input type="text" name="position" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)}></input>
            <button type="submit">Save</button>
        </div>
    </form>
    )
}

export default AddForm