import React from "react"
import styles from "./Info.module.css"
import ProfilePicture from "../assets/Profile-Picture.png"
import emailLogo from "../assets/Email-logo.png"
import linkedlnLogo from "../assets/Linkedln-logo.png"

export default function Info() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img
                    className={styles.avatar}
                    src={ProfilePicture}
                    alt={"Milo the Shiba"}
                />
            </header>
            <div className={styles.bio}>
                <h1 className={styles.name}>Milo</h1>
                <p className={styles.title}>Shiba Inu</p>
                <div className={styles.contacts}>
                    <a 
                        target="_blank"
                        rel="noopener noreferer"
                        className={`${styles.links} ${styles.email}`}
                        hrel="mailto: rzhao010@gmail.com"
                    >
                        <img className={styles.icons} src={emailLogo} alt="" /> Email
                    </a>
                    <a 
                        target="_blank"
                        rel="noopener noreferer"
                        className={`${styles.links} ${styles.linkedln}`}
                        hrel="https://www.linkedin.com/rzhao010/"
                    >
                        <img className={styles.icons} src={linkedlnLogo} alt="" /> LinkedLn
                    </a>
                </div>
            </div>
        </div>
    );
}