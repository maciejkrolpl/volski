import React from 'react'

class SongLyrics extends React.Component {
    componentDidUpdate() {
        const element = document.querySelector('.song-lyrics')
        element.scrollIntoView({
            behavior: 'smooth',
        })
    }
    render() {
        return <div className="song-lyrics">{this.props.lyrics}</div>
    }
}

export default SongLyrics;