import React from 'react'

import styles from './WebsitesBox.module.css'

// For Components
import { Box } from '../Box/Box'

// For Static Data
import { TopGamingSites, TopMERNSites, TopClones } from '@/app/staticData'

export const WebsitesBox = () => {
    return (
        <div className={styles.WebsitesBox}>
            <div className={styles.Parent}>
                <h6>Top 3 Gaming Websites of 2024</h6>
                <div className={styles.Row}>

                    {
                        TopGamingSites.map((I) => (
                            <Box
                                key={I.id}
                                iframeUrl={I.iframeUrl}
                                title={I.title}
                                Desc={I.Desc}
                                VideoLink={I.VideoLink}
                                SourceCodeLink={I.SourceCodeLink}
                            />
                        ))
                    }

                </div>
            </div>
            <div className={styles.Parent}>
                <h6>Top 3 Streaming Platforms of 2024</h6>
                <div className={styles.Row}>

                    {
                        TopClones.map((I) => (
                            <Box
                                key={I.id}
                                iframeUrl={I.iframeUrl}
                                title={I.title}
                                Desc={I.Desc}
                                VideoLink={I.VideoLink}
                                SourceCodeLink={I.SourceCodeLink}
                            />
                        ))
                    }

                </div>
            </div>
            <div className={styles.Parent}>
                <h6>Top 3 MERN Applications of 2024</h6>
                <div className={styles.Row}>
                    {
                        TopMERNSites.map((I) => (
                            <Box
                                key={I.id}
                                iframeUrl={I.iframeUrl}
                                title={I.title}
                                Desc={I.Desc}
                                VideoLink={I.VideoLink}
                                SourceCodeLink={I.SourceCodeLink}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
