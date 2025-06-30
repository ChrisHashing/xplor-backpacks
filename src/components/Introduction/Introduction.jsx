import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Introduction.module.css';
import { Fade } from 'react-awesome-reveal';

function Introduction({ onComplete }) {
    const navigate = useNavigate();

    const handleComplete = () => {
        onComplete(); // Call the parent onComplete function
        navigate('/'); // Navigate to the home page after completion
    };

    // useEffect(() => {
    //     // Optional: Automatically trigger navigation after a certain delay, if you want
    //     const timer = setTimeout(() => {
    //         handleComplete();
    //     }, 5000); // Navigate after 5 seconds

    //     return () => clearTimeout(timer);
    // }, [navigate, onComplete]);

    return (
<Fade
  delay={10} // Wait before starting
  duration={1300} // Animation duration
  fraction={0.5} // Trigger when 50% visible
  triggerOnce // Animate only once
>
            <div className={style.xplore_section}>

                <Fade cascade damping={0.4}>
                    <button
                        className={style.button}
                        onClick={handleComplete} // Call the handleComplete function when clicked
                    >
                        XPLORE ►
                    </button>
                </Fade>
             
            </div>
        </Fade>

    );
}

export default Introduction;
