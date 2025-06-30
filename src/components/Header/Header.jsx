import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate and useLocation
import styles from "./Header.module.css";
import { Fade } from "react-awesome-reveal";
import arrow from '../../assets/icons/arrow.svg';
import refresh from '../../assets/icons/refresh.svg';

import x from '../../assets/icons/x.svg';
import user from '../../assets/icons/user.svg';
import discord from '../../assets/icons/discord.svg';


function Header() {
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator
    const location = useLocation(); // Get the current location
    const navigate = useNavigate(); // Initialize the navigate function
    const currentPath = location.pathname; // Extract the current pathname

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleRefresh = () => {
        setIsLoading(true); // Show loading indicator
        setTimeout(() => {
            setIsLoading(false); // Hide loading after 3 seconds
            window.location.reload(); // Reload the page
        }, 1000); // 1-second delay
    };

    return (
      
            <header className={styles.header}>
                
            <div className={styles.btns}>
                <button className={styles.circle} onClick={handleBack}>
                        <img src={arrow} alt="Back" />
                </button>
                <div className={styles.circle} onClick={handleRefresh}>
                    {isLoading ? (
                        <span className={styles.loading}>Loading...</span>
                    ) : (
                            <img src={refresh} alt="Back" />
                    )}
                </div>
            </div>
            <div className={styles.search}>
                <div className={styles.urlBar}>
                    http://xplorbackpacks.eth{currentPath}
                </div>
            </div>

            <div className={styles.btns}>
               
                <button className={styles.circle}>
                        <img src={discord} />
                </button>
                <button className={styles.circle}>
                    <img src={x} />
                </button>
                <button className={styles.circle}>
                        <img src={user} />
                </button>
            </div>
            </header>

    );
}

export default Header;
