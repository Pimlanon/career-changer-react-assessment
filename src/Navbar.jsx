import './style.css';

const Navbar = () => {
    return (
        <div>
            <ul className="navbar">
                <li className='nav-li'><a href="/">Home</a></li>
                <li className='nav-li'><a href="/owner">Owner</a></li>
            </ul>
            <div className="line-1"></div>
        </div>
    )
}

export default Navbar