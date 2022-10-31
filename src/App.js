import React from "react";
import SongList from "./SongList";
import SongLyrics from "./SongLyrics";
import Header from "./Header";
import Footer from "./Footer";
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
                <Header />
                <SongList onSelectSong={this.handleSelectSong} />
                <SongLyrics lyrics={this.state.lyrics} />
                <Footer />
            </>
        )
    }
}

export default App;