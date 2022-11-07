import React, { useEffect } from 'react'

export default function SongLyrics({ lyrics }) {
    useEffect(() => {
        const element = document.querySelector('.song-lyrics')
        element.scrollIntoView({
            behavior: 'smooth',
        })
    })

    return <div className="song-lyrics">{lyrics}</div>
}
