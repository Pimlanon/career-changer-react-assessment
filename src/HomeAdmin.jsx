import { useState } from "react"
import Layout from "./Layout"
import Data from "./mock-data.json"
import Home from "./Home.jsx"



const HomeAdmin = () => {
    const [inputs, setInputs] = useState(Data)
    const [addForm, setAddForm] = useState({
        name: '',
        lastname: '',
        position: ''
    })
    
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addForm};
        newFormData[fieldName] = fieldValue

        setAddForm(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newInputs = {
            id: Math.floor(Math.random() * 100),
            name: addForm.name,
            lastname: addForm.lastname,
            position: addForm.position
        }

        const addNewInput = [...inputs, newInputs];
        setInputs(addNewInput);
    };

    return (
        <Layout>
            
            <h1 className="haed-home">
                Generation Thailand <br /> Home - Admin Sector
            </h1>
            <div className="btn-home">
                <button>
                    <a href="/homeuser">User Home Sector</a>
                </button>
                <button>
                    <a href="/homeadmin">Admin Home Sector</a>
                </button>
            </div>
            <form className="addinput-homeadmin" onSubmit={handleAddFormSubmit}>
                <h3>Create User here</h3>
                <div className="input-homeadmin">
                    <input type="text" name="name" placeholder="Name" onChange={handleAddFormChange}></input>
                    <input type="text" name="lastname" placeholder="Last Name" onChange={handleAddFormChange}></input>
                    <input type="text" name="position" placeholder="Position" onChange={handleAddFormChange}></input>
                    <button type="submit">Save</button>
                </div>
            </form>
            <table>
                    <tr>
                        <th>name</th>
                        <th>lastname</th>
                        <th>position</th>
                    </tr>
                
                <tbody>
                    {inputs.map((input) => (
                        <tr key={input.id}>
                            <td >{input.name}</td>
                            <td >{input.lastname}</td>
                            <td >{input.position}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            
            

        </Layout>
    )
}

export default HomeAdmin