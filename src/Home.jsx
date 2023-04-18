import Layout from "./Layout"
import { useState } from "react"
import HomeAdmin from "./HomeAdmin"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]



const Home = () => {
  const [input, setInput] = useState(mockEmployees);

  return (
    <Layout>
      <div>
        <h1 className="haed-home">Generation Thailand <br/> React - Assement</h1>
        <div className="btn-home">
          <button><a href="/homeuser">User Home Sector</a></button>
          <button><a href="/homeadmin">Admin Home Sector</a></button>
        </div>

        <section className="hide">
          {input.map((data) => (
            <HomeAdmin key={data.id} data={data} />
          ))}
        </section>
        
        
        
          
      </div>
    </Layout>
  )
}



export default Home;

