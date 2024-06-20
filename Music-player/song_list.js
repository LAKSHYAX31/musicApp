//song list
let All_song = [
   {
     name: "Blinding Lights",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "NoCopyrightSounds [NCS]"
   },
   {
     name: "Call Out My Name",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Out Of Time",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Audio Library"
   },
   {
     name: "Save Your Tears",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "imshahed"
   },
   {
     name: "One Right Now - Post Malone",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "Love Me Harder - Ariana Grande",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Magic Free Release"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/
