import React from 'react';
import styles from './About.module.css';
import RotatingRays from '../../components/RotatingRays/RotatingRays';
import about_bag01 from '../../assets/images/about_bag01.svg';
import nft_0 from '../../assets/nft_bags/nft_0.png';
import nft_1 from '../../assets/nft_bags/nft_1.png';
import nft_2 from '../../assets/nft_bags/nft_2.png';
import { Fade } from 'react-awesome-reveal';
import person_seating from '../../assets/images/person seating.png'
import cloud1 from '../../assets/images/cloud1.png'
import cloud2 from '../../assets/images/cloud2.png'
import sparkle1 from '../../assets/images/sparkle1.png'
import sparkle2 from '../../assets/images/sparkle2.png'
import sparkle3 from '../../assets/images/sparkle3.png'

import cloud01 from '../../assets/images/cloud01.png'
import cloud02 from '../../assets/images/cloud2.png'
import cloud03 from '../../assets/images/cloud2.png'
import cloud04 from '../../assets/images/cloud04.png'

import browser from '../../assets/images/browser.png'



function About() {
    return (
        <div className={styles.about_wrapper}>
            <Fade
                delay={50} // Wait before starting
                duration={800} // Animation duration
                fraction={0.5} // Trigger when 50% visible
                triggerOnce
            >

                <div className={styles.about}>
                    {/* Background Effect */}

                    <div className={styles.rays_container}>
                        <RotatingRays ColorOne={'#8D93CF'} ColorTwo={'#6670AB'} ColorThree={'#B5B9DF'} />
                    </div>
                    <div className={styles.about_head}>ABOUT</div>

                    <div className={styles.images_container}>
                        {/* Foreground Image */}
                        <img src={about_bag01} alt="About Bag" className={styles.about_img} />

                        {/* NFT Images arranged in an overlapping, staggered pattern */}
                        <div className={styles.nft_container}>
                            <img src={nft_0} alt="NFT Bag 0" className={`${styles.nft_img} ${styles.nft_0}`} />
                            <img src={nft_1} alt="NFT Bag 1" className={`${styles.nft_img} ${styles.nft_1}`} />
                            <img src={nft_2} alt="NFT Bag 2" className={`${styles.nft_img} ${styles.nft_2}`} />
                        </div>
                    </div>
                </div>
            </Fade>

            <div className={styles.about_more}>
                {/* Main section with Xplor Backpacks */}
                <div className={styles.hero_section}>
                    <div className={styles.logo_container}>
                        <img src={person_seating} alt="Person Seating" className={styles.person_seating} />
                        <img src={cloud1} alt="Cloud 1" className={styles.cloud1} />
                        <img src={cloud2} alt="Cloud 2" className={styles.cloud2} />
                        <img src={sparkle1} alt="Sparkle 1" className={styles.sparkle1} />
                        <img src={sparkle2} className={styles.sparkle2} />
                        <h1 className={styles.logo}>Xplor
                            <br/>
                             Backpacks</h1>
                        
                    </div>
                    <div className={styles.hero_content}>
                        <div className={styles.hero_description}>
                            <p>
                                Xplor Backpacks are a first-of-its-kind innovation—where websites
                                are tokenized and stored fully onchain. Each of the 10,000
                                backpacks isn't just digital art—it's a key to your own onchain
                                website, forever secured by the <span className={styles.highlight}>WTTP storage protocol</span>.
                            </p>
                            <p>
                                When you own an Xplor Backpack, you own a piece of the internet—
                                a fully decentralized web app that's yours to control. No
                                middlemen. No gatekeepers. Just pure, unstoppable ownership.
                                We're not here to follow trends—we're here to change the game.
                            </p>
                            <p>
                                This is Web3 evolution in real time, and you're early.
                            </p>
                            <div className={styles.mint_button}>
                                <button>Mint your Backpack. Own your Website. Make History.</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How To Access TWA Apps section */}
                <div className={styles.twa_section}>
                    <div className={styles.twa_content}>
                        <img src={sparkle3} className={styles.sparkle3} />

                        <h2 className={styles.section_title}>How To Access <br/> TWA Apps?</h2>
                        <p>
                            Accessing your onchain website is simple. You have two ways to explore
                            your Tokenized Web App:
                        </p>
                        <div className={styles.option}>
                            <h3>Option 1: Enter the Address in the Xplor Backpack URL Bar</h3>
                            <p>
                                Inside the Xplor Backpack website, use the built-in URL bar to enter the
                                WTTP address linked to your Backpack NFT. Instantly view your fully
                                onchain website through our gateway—no extra setup required.
                            </p>
                        </div>
                        <div className={styles.option}>
                            <h3>Option 2: Use Ledge Browser</h3>
                            <p>
                                For the full Web3 experience, download Ledge, our native WTTP browser,
                                and access your site directly from the blockchain—no middlemen, no
                                restrictions.
                            </p>
                            <button className={styles.download_button}>Download Ledge Browser</button>
                        </div>
                    </div>
                    <div className={styles.twa_image}>
                        
                    </div>
                </div>

                {/* WTTP and Ledge section */}
                <div className={styles.wttp_section}>

                    <div className={styles.wttp_image}>
                        <img src={cloud04}  className={styles.cloud01} />
                        <img src={cloud02} className={styles.cloud02} />
                        <img src={cloud03} className={styles.cloud03} />
                        <img src={cloud04} className={styles.cloud04} />
                        <img src={cloud02} className={styles.cloud05} />

                        <img src={browser} className={styles.browser}/>
                    </div>


                    <div className={styles.wttp_content}>
                        <h2 className={styles.section_title}>WTTP AND LEDGE</h2>
                        <p>
                            <strong>WTTP</strong> (Web3 Transfer Protocol) is a decentralized protocol designed for seamless data
                            and asset transfers across blockchain networks. Ledge Browser, developed and launched
                            by MancinoTech Inc., is the first Chromium-based browser to implement WTTP. Currently
                            in beta mode, Ledge enables users to interact with blockchain-powered content and
                            applications natively, making Web3 as accessible as traditional browsing.
                        </p>
                        <p>
                            WTTP is the future of decentralized web interactions, enabling direct, trustless, and
                            efficient data transfers without reliance on centralized servers. As Web3 continues to
                            evolve, WTTP bridges the gap between traditional internet protocols and blockchain
                            networks, providing a faster, more secure, and censorship-resistant way to access
                            content and move assets. With its open architecture and seamless integration into
                            browsers like Ledge, WTTP paves the way for a truly decentralized internet, where users
                            have full control over their data and digital identity.
                        </p>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default About;