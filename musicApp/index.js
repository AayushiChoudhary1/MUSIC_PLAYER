

//------------DEFINE VARIABLE-----------------------

const img = document.querySelector("img");
const music = document.querySelector("audio");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const artist = document.getElementById("artist");
const title = document.getElementById("title");

//-----------------------ARRAY FOR SONG LIST ----------------------


const songs = [
    {
        songName : "heart1",
        artist : "The Loyalist",
        title : "LOUTUS LANE",
    },
    {
        songName : "heart2",
        artist  : "sia",
        title : "Unstoppable",
    },

    {
        songName : "heart3",
        artist : "Justin Biber",
        title : "Stay",
    },


];







//---------------------------PLAYMUIC OR PAUSE MUSIC CODE----------------------------

let isPlaying = false;

const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

const pauseMusic= ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};


play.addEventListener("click", ()=>{
    if(!isPlaying){
        playMusic();
    }
    else{
        pauseMusic();
    }
});

//-----------------------LOADING IMAGE, AUDIO, TEXT IN PLAYER------------------------


const loadSong = (songs) => {
     title.textContent = songs.title;
     artist.textContent = songs.artist;
     img.src = "images/" + songs.songName + ".jpg";
     music.src = "music/" + songs.songName + ".mp3";
};

let songIndex=0;

// ---------------FOR PREVIOUS BUTTON---------------

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () =>{
    songIndex = ((songIndex -1) + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);