import React from "react";
// Bootstrap imports
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../assets/logo.png";
// Css imports
import styles from "../styles/NavBar.module.css";

import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";

import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };

    const addPostIcon = (
        <NavLink className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create">
            <i className="fa-regular fa-square-plus"></i>AddPost
        </NavLink>
    );

    const loggedInIcons = (
        <>
            <NavLink 
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/feed">
                <i className="fa-solid fa-bars-staggered"></i>Feed
            </NavLink>

            <NavLink 
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/liked">
                <i className="fa-solid fa-heart"></i>Liked
            </NavLink>

            <NavLink 
                className={styles.NavLink}
                to="/"
                onClick={handleSignOut}>
                <i className="fa-solid fa-right-to-bracket"></i>SignOut
            </NavLink>

            <NavLink 
                className={styles.NavLink} 
                to={`/profiles/${currentUser?.profile_id}`}>
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
        </>
    );

    const loggedOutIcons = (
        <>
            <NavLink className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin">
                <i className="fa-solid fa-right-to-bracket"></i>Sign In
            </NavLink>

            <NavLink className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup">
                <i className="fa-solid fa-user-plus"></i>Sign Up
            </NavLink>
        </>
    );

    return (
        <Navbar 
            expanded={expanded} 
            className={styles.NavBar} 
            bg="dark"
            expand="md" 
            fixed="top"
        >
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="50" />
                    </Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <NavDropdown title="Categories">
                        <NavDropdown.Item>
                            <NavLink className={styles.NavDropdown} to="/category/movies">
                                Movies
                            </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <NavLink className={styles.NavDropdown} to="/category/games">
                                Games
                            </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <NavLink className={styles.NavDropdown} to="/category/books">
                                Books
                            </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <NavLink className={styles.NavDropdown} to="/category/comics">
                                Comics
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                <Navbar.Toggle
                ref={ref}
                onClick={() => setExpanded(!expanded)} 
                aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/">
                            <i className='fa-solid fa-house'></i>Home
                        </NavLink>

                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;