import React from "react";
import SongList from "./SongList";
import SongLyrics from "./SongLyrics";
import { getLyricsFromRemote } from "./utils";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lyrics: null,
        }
    }
    handleSelectSong = (songTitle) => {
        const fileName = `${songTitle
            .replace(/[^A-Za-z]/gi, '')
            .toLowerCase()}.txt`
        const path = `https://raw.githubusercontent.com/maciejkrolpl/volski-txts/master/${fileName}`

        getLyricsFromRemote(path)
            .then((lyrics) => this.setState({ lyrics }))
    }

    render() {
        return (
            <>
                <div className="header">
                    <div className="flex-cont">
                        <div>Volski</div>
                        <div>lyrics</div>
                    </div>
                </div>
                <SongList onSelectSong={this.handleSelectSong} />
                <SongLyrics lyrics={this.state.lyrics} />
            </>
        )
    }
}

export default App;