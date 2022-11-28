import React from "react"
import { Link } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div>Logo</div>
            <div className="headings-container">
                <div className="box"><Link to='/'>Home</Link></div>
                <div className="box" onClick={() => View('search')}>Search</div>
                <div className="box"><Link to="/explore">Explore</Link></div>
                <div className="box"><Link to='/messages'>Messages</Link></div>
                <div className="box" onClick={() => View('notification')}>Notifications</div>
                <div className="box" onClick={() => View('create')}>Create</div>
                <div className="box"><Link to="/profile">Profile</Link></div>
            </div>
            <div className=" box ">More</div>
        </div>
    )
}

export default Navbar