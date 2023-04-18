import Layout from "./Layout";
import Data from "./mock-data.json"
import { useState } from "react";



const HomeUser = () => {
    const [inputs, setInputs] = useState(Data);

    return (
        <Layout>
            <div>
                <h1 className="haed-home">
                    Generation Thailand <br /> Home - User Sector
                </h1>
                <div className="btn-home">
                    <button>
                    <a href="/homeuser">User Home Sector</a>
                    </button>
                    <button>
                    <a href="/homeadmin">Admin Home Sector</a>
                    </button>
                </div>
                <table>
                    <thead>  
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                    {inputs.map((input) => (
                        <tr>
                            <td>{input.name}</td>
                            <td>{input.lastname}</td>
                            <td>{input.position}</td>
                        </tr>
                    ))} 
                        
                    </tbody>
                </table>

            </div>
        </Layout>
    );
};

export default HomeUser;
