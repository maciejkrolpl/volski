import React from "react"

export default function SongList(props) {
    const handleSongClick = (event) => {
        const title = event.target.innerHTML
        props.onSelectSong(title);
    }

    const songList = [
        'A chto tam idzie',
		'Byvaj',
        'Čužy',
		'Dzie kvietki?',
        'Łamaj scenar',
        'Hieroi našaj ziamli',
        'Krainy niama',
        'Lohkija-lohkija',
        'Majo kachańnie',
        'Mnie treba iści',
        'Žorny',
        'Pałon',
        'Pavietrany šar',
        'Prostyja słovy',
        'Radzima-svaboda',
        'Raz-dva-try',
        'Try čarapachi',
        'Vorahi narodu',
    ].map((song) => (
        <li key={song} onClick={(e) => handleSongClick(e)}>
            <span className="song-title cursor-hand">{song}</span>
        </li>
    ))

    return <ul>{songList}</ul>
}