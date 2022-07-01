import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from "../App";

const NavbarD = () => {
    const {state,dispatch} = useContext(UserContext);

    const RenderMenu = () => {
        if(state){
            return (
                <>
                <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Institute">Institute</NavLink>
                        </li>
                        <li className="nav-item dropdown mx-4">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Administration
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/Hods">Heads of Departments</NavLink>
                                <NavLink className="dropdown-item" to="/Visitors">Visitors</NavLink>
                                <NavLink className="dropdown-item" to="/Directors">Directors</NavLink>
                                <NavLink className="dropdown-item" to="/Deans">Deans</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-4">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Academics
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/AcademicsOffice">Academics Office</NavLink>
                                <NavLink className="dropdown-item" to="/Departments">Departments</NavLink>
                                <NavLink className="dropdown-item" to="/Scholarships">Scholarships</NavLink>
                            </div>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Research">Research <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Facilities">Facilities <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Profile">Profile <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Logout">Logout <span className="sr-only"></span></NavLink>
                        </li>
                </>
            )
        }else{
            return(
                <>
                    <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Institute">Institute</NavLink>
                        </li>
                        <li className="nav-item dropdown mx-4">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Administration
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/Hods">Heads of Departments</NavLink>
                                <NavLink className="dropdown-item" to="/Visitors">Visitors</NavLink>
                                <NavLink className="dropdown-item" to="/Directors">Directors</NavLink>
                                <NavLink className="dropdown-item" to="/Deans">Deans</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-4">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Academics
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/AcademicsOffice">Academics Office</NavLink>
                                <NavLink className="dropdown-item" to="/Departments">Departments</NavLink>
                                <NavLink className="dropdown-item" to="/Scholarships">Scholarships</NavLink>
                            </div>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Research">Research <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Facilities">Facilities <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Profile">Profile <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Login">Login <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/Signup">Registration <span className="sr-only"></span></NavLink>
                        </li>
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-center"></span>
                </button>
                <div className="collapse navbar-collapse me-3" id="navbarSupportedContent">
                    <ul className="navbar-nav text-center mx-auto">
                        <RenderMenu/>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavbarD