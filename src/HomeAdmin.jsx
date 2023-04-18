import { useState } from "react"
import Layout from "./Layout"
import Data from "./mock-data.json"
import Home from "./Home.jsx"
import Table from "./Table"
import AddForm from "./AddForm"



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

    function deleteData(id) {
        console.log(id)
        const result = inputs.filter((item) => item.id !== id);
        setInputs(result);
    }


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
            <AddForm handleAddFormSubmit={handleAddFormSubmit} handleAddFormChange={handleAddFormChange} />
            <table>
                <thead>  
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    {inputs.map((input) => (
                        <Table key={input.id}  input={input} deleteData={deleteData} />
                    ))} 
                </tbody>

                
            </table>
            
            

        </Layout>
    )
}

export default HomeAdmin