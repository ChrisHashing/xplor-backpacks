import React from 'react';
import styles from './Home.module.css';
import { Fade } from 'react-awesome-reveal';
import Rive from '@rive-app/react-canvas';
import { useRive } from '@rive-app/react-canvas';

function Home() {
    const { RiveComponent, inputs } = useRive({
        src: '/person_hi.riv',
        stateMachines: ['State Machine 2'], // Ensure this matches your Rive setup
        autoplay: true,
    });

    // Log inputs for debugging
    console.log('Inputs:', inputs);

    // Safeguard hoverInput
    const hoverInput = inputs?.find(input => input.name === 'Hover Boolean');

    return (
        <Fade
            delay={50} // Wait before starting
            duration={800} // Animation duration
            fraction={0.5} // Trigger when 50% visible
        >
            <div className={styles.home_wrapper}>
                <div className={styles.home}>
                    <p className={styles.header}>XPLOR BACKPACKS</p>
                    <p className={styles.subheader}>10,000 Tokenized Web Apps, Minted Forever.</p>
                </div>
            </div>
        </Fade>
    );
}

export default Home;