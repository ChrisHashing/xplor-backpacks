import React, { useState, useEffect } from 'react';
import styles from './FAQSection.module.css';

const FAQSection = () => {
    // Array of FAQ items
    const faqItems = [
        {
            id: 1,
            question: "At its core, XPLOR BACKPACKS are more than just storage solutions?",
            answer: "At its core, XPLOR BACKPACKS are more than just storage solutions. They are your digital vaults, designed to carry everything you need in the Web3 world. These tokenized backpacks allow you to access and manage your digital assets securely while maintaining full ownership and control."
        },
        {
            id: 2,
            question: "At its core, XPLOR BACKPACKS are more than just storage solutions?",
            answer: "At its core, XPLOR BACKPACKS are more than just storage solutions. They are your digital vaults, designed to carry everything you need in the Web3 world. These tokenized backpacks allow you to access and manage your digital assets securely while maintaining full ownership and control."
        },
        {
            id: 3,
            question: "At its core, XPLOR BACKPACKS are more than just storage solutions?",
            answer: "At its core, XPLOR BACKPACKS are more than just storage solutions. They are your digital vaults, designed to carry everything you need in the Web3 world. These tokenized backpacks allow you to access and manage your digital assets securely while maintaining full ownership and control."
        },
        {
            id: 4,
            question: "At its core, XPLOR BACKPACKS are more than just storage solutions?",
            answer: "At its core, XPLOR BACKPACKS are more than just storage solutions. They are your digital vaults, designed to carry everything you need in the Web3 world. These tokenized backpacks allow you to access and manage your digital assets securely while maintaining full ownership and control."
        },
        {
            id: 5,
            question: "At its core, XPLOR BACKPACKS are more than just storage solutions?",
            answer: "At its core, XPLOR BACKPACKS are more than just storage solutions. They are your digital vaults, designed to carry everything you need in the Web3 world. These tokenized backpacks allow you to access and manage your digital assets securely while maintaining full ownership and control."
        }
    ];

    // State to track which FAQ item is open
    const [openItem, setOpenItem] = useState(1);

    // Optional: Close all items on small screens initially
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                setOpenItem(null);
            } else if (openItem === null) {
                setOpenItem(1); // Reset to first item open on larger screens
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [openItem]);

    // Toggle function to open/close FAQ items
    const toggleItem = (id) => {
        if (openItem === id) {
            setOpenItem(null);
        } else {
            setOpenItem(id);
        }
    };

    return (
        <div className={styles.faq_container}>
            <div className={styles.faq_header}>
                <h1 className={styles.faq_title}>
                    Common Questions
                    <br />
                    And Quick Answers
                </h1>
            </div>

            <div className={styles.faq_items}>
                {faqItems.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.faq_item} ${openItem === item.id ? styles.open : ''}`}
                    >
                        <div
                            className={styles.faq_question}
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={openItem === item.id}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    toggleItem(item.id);
                                }
                            }}
                        >
                            {item.question}
                            <span className={styles.arrow} aria-hidden="true"></span>
                        </div>
                        <div
                            className={styles.faq_answer}
                            aria-hidden={openItem !== item.id}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;