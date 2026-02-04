const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const songSlider = document.getElementById("song-slider");

const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songs  = [
    {
        image: "/images/earl album cover.jpg",
        name: "Couch ft. Tyler, the Creator",
        artist: "Earl Sweatshirt",
        audio: "./couch ft tyler.mp3",
    },
    {
        image: "/images/earl album cover.jpg",
        name: "epaR ft. Vince Staples",
        artist: "Earl Sweatshirt",
        audio: "epar ft vince staples.mp3",
    },
    {
        image: "/images/earl album cover.jpg",
        name: "Moonlight ft. Hodgy Beats",
        artist: "Earl Sweatshirt",
        audio: "./moonlight ft hodgy.mp3",
    },
    {
        image: "/images/earl album cover.jpg",
        name: "Pigions ft. Tyler, the Creator",
        artist: "Earl Sweatshirt",
        audio: "./pigions ft wolf haley.mp3",
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;
updateSong();

prevSongButton.addEventListener("click", function() {
    if(currentSongIndex == 0){
        return;
    }
    currentSongIndex --;
    updateSong();
    audio.play();
})

nextSongButton.addEventListener("click", function() {
    if(currentSongIndex == songs.length -1){
        return;
    }
    currentSongIndex ++;
    updateSong();
    audio.play();
})

playpauseButton.addEventListener("click", function(){
    if(!audio.paused){
        audio.pause();
    }
    else{
        audio.play();
    }
});

function updateSong() {
    const song = songs[currentSongIndex]
    songImage.src = song.image;
    songName.innerText = song.name;
    songArtist.innerText = song.artist;

    audio.src = song.audio;

    songSlider.value = 0;
    songSlider.max = audio.duration;
}