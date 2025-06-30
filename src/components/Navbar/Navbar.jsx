import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Fade } from "react-awesome-reveal";
import logo from '../../assets/icons/logo.png';

function Navbar() {
    const [activeButton, setActiveButton] = useState("MINT");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen size is mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkIsMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIsMobile);

        // Clean up
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (buttonName) => {
        setActiveButton(buttonName);
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <nav className={`${styles.navbar} ${isMenuOpen ? styles.navbarExpanded : ''}`}>
                {isMobile && (
                    <div className={styles.mobileNav}>
                        <Link to="/">
                            <button
                                className={`${styles.navButton} ${styles.centerButton} ${activeButton === "HOME" ? styles.activeButton : ""}`}
                                onClick={() => handleNavClick("HOME")}
                            >
                                <img src={logo} alt="Logo" />
                            </button>
                        </Link>
                        <button
                            className={styles.hamburger}
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                )}

                <div className={`${styles.navbarContainer} ${isMenuOpen || !isMobile ? styles.visible : styles.hidden}`}>
                    {!isMobile && (
                        <>
                            <Link to="/about">
                                <button
                                    className={`${styles.navButton} ${activeButton === "ABOUT" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("ABOUT")}
                                >
                                    ABOUT
                                </button>
                            </Link>
                            <Link to="/faq">
                                <button
                                    className={`${styles.navButton} ${activeButton === "RARITY" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("RARITY")}
                                >
                                    FAQ
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className={`${styles.navButton} ${styles.centerButton} ${activeButton === "HOME" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("HOME")}
                                >
                                    <img src={logo} alt="Logo" />
                                </button>
                            </Link>
                            <Link to="/mint">
                                <button
                                    className={`${styles.navButton} ${activeButton === "MINT" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("MINT")}
                                >
                                    MINT
                                </button>
                            </Link>
                            <Link to="/roadmap">
                                <button
                                    className={`${styles.navButton} ${activeButton === "ROADMAP" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("ROADMAP")}
                                >
                                    ROADMAP
                                </button>
                            </Link>
                        </>
                    )}

                    {isMobile && (
                        <div className={styles.mobileMenu}>
                            <Link to="/about">
                                <button
                                    className={`${styles.navButton} ${activeButton === "ABOUT" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("ABOUT")}
                                >
                                    ABOUT
                                </button>
                            </Link>
                            <Link to="/faq">
                                <button
                                    className={`${styles.navButton} ${activeButton === "RARITY" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("RARITY")}
                                >
                                    FAQ
                                </button>
                            </Link>
                            <Link to="/mint">
                                <button
                                    className={`${styles.navButton} ${activeButton === "MINT" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("MINT")}
                                >
                                    MINT
                                </button>
                            </Link>
                            <Link to="/roadmap">
                                <button
                                    className={`${styles.navButton} ${activeButton === "ROADMAP" ? styles.activeButton : ""}`}
                                    onClick={() => handleNavClick("ROADMAP")}
                                >
                                    ROADMAP
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

                {!isMobile && (
                    <Link to="/faq">
                        <button
                            className={`${styles.questionButton} ${activeButton === "FAQ" ? styles.activeButton : ""}`}
                            onClick={() => handleNavClick("FAQ")}
                        >?</button>
                    </Link>
                )}
            </nav>
        </div>
    );
}

export default Navbar;