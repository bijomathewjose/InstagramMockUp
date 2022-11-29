import React from "react"
import { Link } from "react-router-dom"
import './navbar.css'
import navbarHeadings from './navbar-data.json'

const Navbar = () => {
    function View(name) {
        console.log(name)
    }
    return (
        <div className="nav-container">
            <Link to="/" className="logo">
                <img src="./assets/navbar/logo-text.svg" />
            </Link>
            <div className="headings-container">
                {navbarHeadings.map((heads) =>
                    (heads.linked ? <Linked heads={heads} View={View} /> : <Slide heads={heads} View={View} />)
                )}
            </div >
            <Slide heads={{ "name": "more" }} View={View} />
        </div >
    )
}
function Linked({ heads, View }) {
    return (<Link to={heads.link} className="box" onClick={() => View(heads.name)}>
        <Content heads={heads} />
    </Link>)
}
function Slide({ heads, View }) {
    return (<div className="box" onClick={() => View(heads.name)}>
        <Content heads={heads} />
    </div>)
}
function Content({ heads }) {
    return (
        <>
            <img
                className={`${heads.name === "profile" ? "image-profile" : ""}`}
                src={`./assets/navbar/${heads.name}${heads.name === "profile" ? ".jpeg" : "-outline.svg"}`}
                alt={`${heads.name + "image"}`} />
            <div className="box-heads capitalize">{heads.name}</div>
        </>
    )
}
export default Navbar