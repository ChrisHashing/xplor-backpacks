// MilestonesVision.jsx
import React from 'react';
import styles from './MilestonesVision.module.css';
import time from '../../../assets/images/sand-clock.png';
import puzzile from '../../../assets/images/puzzle.png';
import globe from '../../../assets/images/planet.png';
import dev from '../../../assets/images/tools.png';

const MilestonesVision = () => {
    return (
        <div className={styles.milestones_container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Milestones & Future Vision</h1>
            </div>

            <div className={styles.milestones_grid}>
                {/* Q1 - Foundation & Launch */}
                <div className={`${styles.milestone_card} ${styles.milestone_red}`}>
                    <div className={styles.quarter_badge}>
                        <span className={styles.quarter_text}>Q1</span>
                        <span className={styles.quarter_stars}></span>
                    </div>
                    <div className={styles.time_icon}>
                        <img src={time} alt="Time icon" className={styles.time_icon} />
                    </div>

                    <h2 className={styles.milestone_title}>Foundation & Launch</h2>

                    <p className={styles.milestone_description}>
                        Launch of Ledge Browser and minting of 10,000 Xplor Backpacks.
                    </p>
                </div>

                {/* Q2 - Expansion & Builder Tools */}
                <div className={`${styles.milestone_card} ${styles.milestone_blue}`}>
                    <div className={styles.quarter_badge}>
                        <span className={styles.quarter_text}>Q2</span>
                        <span className={styles.quarter_stars}></span>
                    </div>

                    <div className={styles.puzzle_icon}>
                        <img src={puzzile} alt="Puzzle pieces" className={styles.card_icon} />
                    </div>

                    <h2 className={styles.milestone_title}>Expansion & Builder Tools</h2>

                    <p className={styles.milestone_description}>
                        Release of Backpack Templates & Tools for holders to customize their backpack websites, along with the launch of Xplor Dapp Builder.
                    </p>
                </div>

                {/* Q3 - Xplor Chain development */}
                <div className={`${styles.milestone_card} ${styles.milestone_green}`}>
                    <div className={styles.quarter_badge}>
                        <span className={styles.quarter_text}>Q3</span>
                        <span className={styles.quarter_stars}></span>
                    </div>

                    <div className={styles.tools_icon}>
                        <img src={dev} alt="Development tools" className={styles.card_icon} />
                    </div>

                    <h2 className={styles.milestone_title}>Xplor Chain development</h2>

                    <p className={styles.milestone_description}>
                        Development of Xplor Chain, laying the foundation for the upcoming mainnet and full ecosystem activation.
                    </p>
                </div>

                {/* Q6 - Xplor Mainnet Activation */}
                <div className={`${styles.milestone_card} ${styles.milestone_purple}`}>
                    <div className={styles.quarter_badge}>
                        <span className={styles.quarter_text}>Q6</span>
                        <span className={styles.quarter_stars}></span>
                    </div>

                    <div className={styles.planet_icon}>
                        <img src={globe} alt="Planet" className={styles.card_icon} />
                    </div>

                    <h2 className={styles.milestone_title}>Mainnet Activation</h2>

                    <p className={styles.milestone_description}>
                        Backpack holders gain access to pre-built website templates and the Xplor Dapp Builder for deploying WTTP websites.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MilestonesVision;