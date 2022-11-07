import darkModeIco from './images/dark-mode-icon.png';
import { useState, useEffect } from 'react';
export default function Footer() {

    const handleDarkMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        document.body.dataset.theme = mode;
    })

    const [mode, setMode] = useState('dark');

    return (
        <div className="foot">
            <div className="foot-left">
                Zrobił Maciek dla Ziara, żeby nie marudził.<br />
                Wydewelopowane na Reactcie.<br />
                Wisi na Firebasie.
            </div>
            <div className="foot-right">
                <img src={darkModeIco}
                    className="cursor-hand"
                    alt="Toggle Dark Mode" width="32" height="32"
                    onClick={() => handleDarkMode()}>
                </img>
            </div>
        </div>
    )
}