import React from "react";
import NoResults from "../assets/no-results.png";
import { Link } from 'react-router-dom';
import styles from "../styles/PageNotFound.module.css";
import Asset from "./Asset";


const PageNotFound = () => {
    return (
        <>
            <div className={`${styles.PageNotFound} text-center`}>
                <Link 
                    to={"/"} 
                    className={styles.Back}
                >
                    {`Page not found.`}
                <br />
                {`Click me to return to the main page`}
                </Link>
                    <Asset 
                    src={NoResults} />
            </div>
        </>
    );
};

export default PageNotFound;