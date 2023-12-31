import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>
        <nav className="main-nav">
        <ul>
            <li><NavLink to="/mountain">Mountain</NavLink> </li>
            <li><NavLink to="/beach">Beaches</NavLink> </li>
            <li><NavLink to="/birds">Birds</NavLink> </li>
            <li><NavLink to="/food">Food</NavLink> </li>
        </ul>
        </nav>
        </>
    )
}