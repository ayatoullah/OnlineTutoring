import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import './Courses.css';




const CourseNavbar = () => {
    return (
        <>
        <nav className="navbar">
            <NavLink to="coursedata" className="nav-link">Courses</NavLink>
            <NavLink to="participants" className="nav-link">Participants</NavLink>
        </nav>
        <Outlet />
        </>

  );
};

export default CourseNavbar;