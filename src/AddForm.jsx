import "./style.css";

const AddForm = (props) => {
    const { handleAddFormSubmit, handleAddFormChange } = props;
    return (
        <form className="addinput-homeadmin" onSubmit={handleAddFormSubmit}>
        <h3>Create User here</h3>
        <div className="input-homeadmin">
            <input type="text" name="name" placeholder="Name" onChange={handleAddFormChange}></input>
            <input type="text" name="lastname" placeholder="Last Name" onChange={handleAddFormChange}></input>
            <input type="text" name="position" placeholder="Position" onChange={handleAddFormChange}></input>
            <button type="submit">Save</button>
        </div>
    </form>
    )
}

export default AddForm