console.log('welcome to my music player');

// Initialize the variables
let masterPlay=document.getElementById('master-play');
let nextSong=document.getElementById('next-song');
let soundBar=document.getElementById('soundbar');
let songItems=Array.from(document.getElementsByClassName('list-number'));
let bottomName=document.getElementById('bottom-name');
let bottomImage=document.getElementById('bottom-image');
let bottomSinger=document.getElementById('bottom-singer');
let songIndex=0;
const songs=[
    {songName:"Raataan Lambiyan", filePath:"audio1.mp3",songImage:"Hindi1.jpg",singerName:"Jubin Nautiyal"},
    {songName:"Kalakar", filePath:"audio2.mp3",songImage:"Latest1.jpg",singerName:"Khan Saab"},
    {songName:"Care Ni Karda", filePath:"audio3.mp3",songImage:"Hindi3.jpg",singerName:"Sweetaj Brar"},
    {songName:"Pani Pani", filePath:"audio4.mp3",songImage:"Latest3.jpg",singerName:"Ninja"},
    {songName:"Chitta", filePath:"audio5.mp3",songImage:"Hindi5.jpg",singerName:"Manan Bhardwaj"},
    {songName:"Unstoppable", filePath:"audio6.mp3",songImage:"English1.jpg",singerName:"SIA"},
]
 console.log(songs[3].filePath);
let audioElement=new Audio(songs[songIndex].filePath);

// play/pause

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        
    }
})

// Update Seekbar

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    soundBar.value=progress;
})
soundBar.addEventListener('change',()=>{
    audioElement.currentTime=(soundBar.value*audioElement.duration)/100;
})

// Next/Previous song

nextSong.addEventListener('click',()=>{
    if(songIndex>=songs.length-1){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src= songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();  
        bottomImage.src=songs[songIndex].songImage;
        bottomSinger.innerText=songs[songIndex].singerName;
        bottomName.innerHTML=songs[songIndex].songName; 
        
})

