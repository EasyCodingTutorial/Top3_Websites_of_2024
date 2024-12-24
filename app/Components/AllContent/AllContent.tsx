import React from 'react'

import styles from './AllContent.module.css'



import { WebsitesBox } from '../WebsitesBox/WebsitesBox'

export const AllContent = () => {
    return (
        <div className={styles.AllContent}>
            <div>
                <h6 className={styles.Title}>2024 Season Comes to End, Here Are Top 3 Websites</h6>

                <WebsitesBox />
            </div>
        </div>
    )
}
