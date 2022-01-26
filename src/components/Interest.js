import React from "react"
import styles from "./Interest.module.css"

export default function Internet() {
    return (
        <main className={styles.interest}>
            <h2 className={styles.header}>Interests</h2>
            <p className={styles.texts}>
                Sleeping, eating, chewing, running after bunnies, chasing balls and farting.
            </p>
        </main>
    );
}