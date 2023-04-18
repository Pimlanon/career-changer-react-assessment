import Layout from "./Layout"

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

  return (
    <Layout>
      <div>
        <h1 className="haed-home">Generation Thailand <br/> React - Assement</h1>
        <div className="btn-home">
          <button><a href="/homeuser">User Home Sector</a></button>
          <button><a href="/homeadmin">Admin Home Sector</a></button>
        </div>
      </div>
    </Layout>
  )
}



export default Home
