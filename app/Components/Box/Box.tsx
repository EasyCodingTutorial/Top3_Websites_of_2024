import React from 'react'

import styles from './Box.module.css'
import Link from 'next/link'

interface BoxProps {
    iframeUrl: string,
    title: string,
    Desc: string,
    VideoLink: string,
    SourceCodeLink: string
}

export const Box = (
    {
        iframeUrl,
        title,
        Desc,
        VideoLink,
        SourceCodeLink
    }: BoxProps
) => {
    return (
        <div className={styles.Box}>
            <iframe src={iframeUrl} title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div className={styles.BoxContent}>
                <h6>
                    {title}
                </h6>
                <p>
                    {Desc}
                </p>

                <div className={styles.Btns}>
                    <Link href={VideoLink} target='_blank'>View Video</Link>
                    <Link href={SourceCodeLink} target='_blank'>Download Source Code</Link>
                </div>

            </div>
        </div>
    )
}
