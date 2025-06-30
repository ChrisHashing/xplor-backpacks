import React, { useState } from "react";
import styles from "./Rarity.module.css";
import { FaDice } from "react-icons/fa";
import nft_0 from "../../assets/nft_bags/nft_0.png";
import nft_1 from "../../assets/nft_bags/nft_1.png";
import nft_2 from "../../assets/nft_bags/nft_2.png";
import nft_3 from "../../assets/nft_bags/nft_3.png";
import nft_4 from "../../assets/nft_bags/nft_4.png";
import nft_5 from "../../assets/nft_bags/nft_5.png";
import nft_6 from "../../assets/nft_bags/nft_6.png";
import nft_7 from "../../assets/nft_bags/nft_7.png";
import nft_8 from "../../assets/nft_bags/nft_8.png";
import nft_9 from "../../assets/nft_bags/nft_9.png";
import nft_10 from "../../assets/nft_bags/nft_10.png";
import nft_11 from "../../assets/nft_bags/nft_11.png";
import nft_12 from "../../assets/nft_bags/nft_12.png";
import nft_13 from "../../assets/nft_bags/nft_13.png";
import nft_14 from "../../assets/nft_bags/nft_14.png";
import nft_15 from "../../assets/nft_bags/nft_15.png";
import nft_16 from "../../assets/nft_bags/nft_16.png";
import nft_17 from "../../assets/nft_bags/nft_17.png";
import nft_18 from "../../assets/nft_bags/nft_18.png";
import dice_roll from "../../assets/images/dice-1-dice.gif";
import { Fade } from "react-awesome-reveal";


const nfts = [
  nft_0, nft_1, nft_2, nft_3, nft_4, nft_5, nft_6, nft_7, nft_8, nft_9,
  nft_10, nft_11, nft_12, nft_13, nft_14, nft_15, nft_16, nft_17, nft_18
];

function Rarity() {
  const [displayedImages, setDisplayedImages] = useState([nft_0, nft_1, nft_2, nft_3]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [rolling, setRolling] = useState(false); // New state for dice roll visibility

  const rollSound = new Audio("./sounds/dice-142528.mp3"); // Replace with your sound file
  const successSound = new Audio("./sounds/playful-casino-slot-machine-bonus-1-183918.mp3"); // Replace with your success sound file

  const rollImages = () => {
    rollSound.play(); // Play roll sound
    setRolling(true); // Show dice roll animation

    setTimeout(() => {
      successSound.play();
    }, 800);
    setShowConfetti(false); // Hide confetti

    let rollingInterval;
    const finalImages = Array.from({ length: 4 }, () => nfts[Math.floor(Math.random() * nfts.length)]);

    const roll = () => {
      setDisplayedImages(Array.from({ length: 4 }, () => nfts[Math.floor(Math.random() * nfts.length)]));
    };

    rollingInterval = setInterval(roll, 100);

    setTimeout(() => {
      clearInterval(rollingInterval);
      setDisplayedImages(finalImages);
      setRolling(false); // Hide dice roll animation

      successSound.play(); // Play success sound
      setShowConfetti(true); // Show confetti
      setTimeout(() => {
        setShowConfetti(false); // Hide confetti after 2 seconds
      }, 2000);
    }, 2000); // 2 seconds animation duration
  };

  return (
    <div className={styles.container}>
      {showConfetti && (
        <div className={styles.confetti_container}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={styles.confettiPiece}>
              <div class="confetti">
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
                <div class="confetti-piece"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      

      <div className={styles.wrapper}>
        <Fade
          delay={50} // Wait before starting
          duration={800} // Animation duration
          fraction={0.5} // Trigger when 50% visible
        >
        <h1 className={styles.title}>RARITY</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <div className={styles.cardContainer}>
          {displayedImages.map((img, index) => (
            <div key={index} className={styles.card}>
              <img src={img} alt={`Backpack ${index + 1}`} className={styles.cardImage} />
            </div>
          ))}
        </div>
      </Fade>

        <button
          className={`${styles.rollButton} ${rolling ? styles.shake : ""}`} // Add shake class during rolling
          onClick={rollImages}
          disabled={rolling} // Disable button while rolling
        >
          <FaDice className={styles.diceIcon} /> Roll
        </button>
      
   

        {rolling && (
          <img className={styles.dice_roll} src={dice_roll} alt="Dice rolling animation" />
        )}
      </div>
    </div>
  );
}

export default Rarity;
