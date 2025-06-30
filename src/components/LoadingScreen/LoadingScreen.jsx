import React, { useState, useEffect } from 'react';
import style from './LoadingScreen.module.css';
import { Fade } from 'react-awesome-reveal';

// Create an array of all image paths your app will use
const imagePaths = [
    '/src/assets/images/about_bag.png',
    '/src/assets/images/about_bag01.svg',
    '/src/assets/images/about_bg.png',
    '/src/assets/images/about.png',
    '/src/assets/images/browser.png',
    '/src/assets/images/cloud1.png',
    // Add all your other image paths here
];

function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const totalAssets = imagePaths.length;
        console.log('Total assets:', totalAssets);

        if (totalAssets === 0) {
            onComplete();
            return;
        }

        let loadedAssets = 0;

        // Function to update progress
        const updateProgress = () => {
            loadedAssets++;
            const currentProgress = Math.round((loadedAssets / totalAssets) * 100);
            setProgress(currentProgress);

            console.log(`Loaded ${loadedAssets}/${totalAssets} assets`);

            if (loadedAssets === totalAssets) {
                onComplete();
            }
        };

        // Preload each image
        imagePaths.forEach(path => {
            const img = new Image();
            img.onload = updateProgress;
            img.onerror = updateProgress; // Count errors as "loaded" to avoid stuck loading
            img.src = path;
        });
    }, [onComplete]);

    return (
        <Fade
            delay={10}
            duration={1300}
            fraction={0.5}
            triggerOnce
        >
            <div className={style.loadingContainer}>
                <div className={style.loading}>
                    <span className={style.loadingText}>L</span>
                    <span className={style.loadingText}>O</span>
                    <span className={style.loadingText}>A</span>
                    <span className={style.loadingText}>D</span>
                    <span className={style.loadingText}>I</span>
                    <span className={style.loadingText}>N</span>
                    <span className={style.loadingText}>G . . .</span>
                </div>
                <div className={style.progressBar}>
                    <div
                        className={style.progressFill}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className={style.progressText}>{progress}%</div>
            </div>
        </Fade>
    );
}

export default LoadingScreen;