import Layout from "./Layout";

const HomeUser = () => {
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
            </div>
        </Layout>
    );
};

export default HomeUser;
