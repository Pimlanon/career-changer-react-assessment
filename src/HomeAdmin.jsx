import Layout from "./Layout"

const HomeAdmin = () => {
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
            <div className="addinput-homeadmin">
                <h3>Create User here</h3>
                <div className="input-homeadmin">
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Last Name"></input>
                    <input type="text" placeholder="Position"></input>
                    <button>Save</button>
                </div>
            </div>
            
        </Layout>
    )
}

export default HomeAdmin