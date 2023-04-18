import Layout from "./Layout"
import './style.css';

const Owner = () => {
    return (
        <Layout>
        <div className="myInfo">
            <h1>Folk - Group E - 26</h1>
            <img src="https://images.unsplash.com/photo-1638898407927-79801f46960b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
            <p className="head">Short Biography:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </Layout>
    )
}

export default Owner