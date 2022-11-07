import React, { useState } from "react";
import SongList from "./SongList";
import SongLyrics from "./SongLyrics";
import Header from "./Header";
import Footer from "./Footer";
import { getLyricsFromRemote } from "./utils";

export default function App() {
    const [lyrics, setLyrics] = useState(null);

    const handleSelectSong = (songTitle) => {
        const fileName = `${songTitle
            .replace(/[^A-Za-z]/gi, '')
            .toLowerCase()}.txt`
        const path = `https://raw.githubusercontent.com/maciejkrolpl/volski-txts/master/${fileName}`

        getLyricsFromRemote(path)
            .then((gotLyrics) => setLyrics(gotLyrics))
    }

    return (
        <div className="main-app">
            <Header />
            <SongList onSelectSong={handleSelectSong} />
            <SongLyrics lyrics={lyrics} />
            <Footer />
        </div>
    )
}