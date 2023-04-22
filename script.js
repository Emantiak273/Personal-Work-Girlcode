let artistName = "ColdPlay"

let artists = ["ColdOPlay", "Jess Glynne","Jessie J", "Destineys Child" ]

let songInfo = {
    "song-image": "images/coldplay.jpg",
    "song-name": "Fix you",
    "song-artist": "ColdPlay"
}

let songs = [
    {
        "songurl": "song.html",
        "songimage": "images/coldplay.jpg",
        "songname": "Fix you",
        "songartist": "ColdPlay"
    },
    {
        "songurl": "jess-G.html",
        "songimage": "images/Jess_Glynne.png",
        "songname": "Take Me Home",
        "songartist": "Jess Glynne"
    },
    {
        "songurl": "jessieJ.html",
        "songimage": "images/jessie-j.jpg",
        "songname": "Masterpiece",
        "songartist": "Jessie J"
    },
    {
        "songurl": "destinyschild.html",
        "songimage": "images/DC.jpg",
        "songname": "Girl",
        "songartist": "Destinys Child"
    }
]

let songListEl = document.querySelector(".songs-list")


songs.forEach((song, idx) => {
    console.log(idx,song)

    let songItem =document.createElement("div")
    songItem.className = "song-item"

    let songAnchor =document.createElement("a")
    songAnchor.href = song.songurl
    songItem.appendChild(songAnchor)

    let songImg = document.createElement("img")
    songImg.src = song.songimage
    songImg.alt = song.songartist + " - " + song.songname
    songAnchor.appendChild(songImg)

    let songInfo = document.createElement("div")
    songInfo.className = "song-info"
    songAnchor.appendChild(songInfo)

    let songName = document.createElement("h3")
    songName.innerText = song.songname
    songInfo.appendChild(songName)

    let songartist = document.createElement("h4")
    songName.innerText = song.songname
    songInfo.appendChild(songartist)

    songListEl.appendChild(songItem)
})
    songs.forEach((song, idx) => {
        let songItem = document.createElement("div")
        songItem.className = "song-item"
    
        songListEl.appendChild(songItem)

})
