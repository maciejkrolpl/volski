import React from "react"

class SongList extends React.Component {
    klik(event) {
        const target = event.target
        // hightlightSelected(target);
        const title = target.innerHTML
        this.props.onSelectSong(title)
    }

    render() {
        const songList = [
            'A chto tam idzie',
            'Čužy',
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
            <li key={song} onClick={(e) => this.klik(e)}>
                <span className="song-title">{song}</span>
            </li>
        ))
        return <ul>{songList}</ul>
    }
}

export default SongList;