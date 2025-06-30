import React, { useEffect, useState } from 'react';
import styles from './Faq.module.css';
import RotatingRays from '../../components/RotatingRays/RotatingRays';
import faq_bag01 from '../../assets/faq.png';
import nft_0 from '../../assets/nft_bags/nft_0.png';
import nft_1 from '../../assets/nft_bags/nft_1.png';
import nft_2 from '../../assets/nft_bags/nft_2.png';
import { Fade } from 'react-awesome-reveal';
import FAQSection from './FAQSection/FAQSection';

function Faq() {
    // Optional: Add window resize listener to handle specific adjustments if needed
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.faq_wrapper}>
            <Fade
                delay={50}
                duration={800}
                fraction={0.5}
                triggerOnce
            >
                <div className={styles.faq}>
                    {/* Background Effect */}
                    <div className={styles.rays_container}>
                        <RotatingRays ColorOne={'#598963'} ColorTwo={'#3F7250'} ColorThree={'#7EB99B'} />
                    </div>
                    <div className={styles.faq_head}>FAQS</div>

                    <div className={styles.images_container}>
                        {/* Foreground Image */}
                        <img src={faq_bag01} alt="FAQ Bag" className={styles.faq_img} />

                        {/* If you need to add the NFT images back, uncomment this section */}
                        {/*
                        <div className={styles.nft_container}>
                            <img src={nft_0} alt="NFT 0" className={`${styles.nft_img} ${styles.nft_0}`} />
                            <img src={nft_1} alt="NFT 1" className={`${styles.nft_img} ${styles.nft_1}`} />
                            <img src={nft_2} alt="NFT 2" className={`${styles.nft_img} ${styles.nft_2}`} />
                        </div>
                        */}
                    </div>
                </div>
            </Fade>

            <div className={styles.faq_more}>
                <FAQSection />
            </div>
        </div>
    );
}

export default Faq;