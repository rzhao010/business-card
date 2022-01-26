import React from "react"
import styles from "./Footer.module.css"
import twitterLogo from "../assets/Twitter-logo.png"
import instagramLogo from "../assets/Instagram-logo.png"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                <a 
                    target="_blank"
                    rel="noopener noopener"
                    className={styles.links}
                    href="https://instagram.com/ben_zhao"
                >
                    <img
                        src={instagramLogo}
                        alt="Click to open Milo's Ins"
                        className={styles.socialIcons}
                    />
                </a>
                <a 
                    target="_blank"
                    rel="noopener noopener"
                    className={styles.links}
                    href="https://twitter.com"
                >
                    <img
                        src={twitterLogo}
                        alt="Click to open Milo's Twitter"
                        className={styles.socialIcons}
                    />
                </a>
            </div>
        </footer>
    );
}