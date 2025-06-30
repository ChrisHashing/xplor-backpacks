import React, { useEffect, useState } from 'react';
import styles from './Roadmap.module.css';
import RotatingRays from '../../components/RotatingRays/RotatingRays';
import roadmap_bg from '../../assets/road.svg';
import nft_0 from '../../assets/nft_bags/nft_0.png';
import nft_1 from '../../assets/nft_bags/nft_1.png';
import nft_2 from '../../assets/nft_bags/nft_2.png';
import { Fade } from 'react-awesome-reveal';
import MilestonesVision from './MilestonesVision/MilestonesVision';

function Roadmap() {
  // Optional: Add state to track window size for more specific adjustments
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.roadmap_wrapper}>
      <Fade
        delay={50}
        duration={800}
        fraction={0.5}
        triggerOnce
      >
        <div className={styles.roadmap}>
          {/* Background Effect */}
          <div className={styles.rays_container}>
            <RotatingRays ColorOne={'#FCEFDD'} ColorTwo={'#DBAC82'} ColorThree={'#EAD0AD'} />
          </div>
          <div className={styles.roadmap_head}>ROADMAP</div>

          <div className={styles.images_container}>
            {/* Foreground Image */}
            <img src={roadmap_bg} alt="Roadmap Background" className={styles.roadmap_img} />

            {/* NFT Images - Uncomment if needed */}
            {/* {windowWidth > 576 && (
              <div className={styles.nft_container}>
                <img src={nft_0} alt="NFT Bag 0" className={`${styles.nft_img} ${styles.nft_0}`} />
                <img src={nft_1} alt="NFT Bag 2" className={`${styles.nft_img} ${styles.nft_2}`} />
                <img src={nft_2} alt="NFT Bag 1" className={`${styles.nft_img} ${styles.nft_1}`} />
              </div>
            )} */}
          </div>
        </div>
      </Fade>

      <div className={styles.roadmap_more}>
        <MilestonesVision />
      </div>
    </div>
  );
}

export default Roadmap;