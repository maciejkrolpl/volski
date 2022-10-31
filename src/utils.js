const getLyricsFromRemote = (url) => new Promise((resolve, reject) => {
    const x = new XMLHttpRequest()

    x.onload = () => {
        const lyrics = x.responseText
        resolve(lyrics)
    }

    x.onerror = () => {
        reject('Bang!')
    }

    x.open('GET', url)
    x.send()
})


export { getLyricsFromRemote };
