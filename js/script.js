const myMusicList= [
"Woman Like Me - Adele",
"Electricity - Pheelz & Davido",
"Say Yeah - Mnelia",
"Spending Addiction - Gunna",
"Looku Looku - Tems",
"Ku Lo Sa - Oxlade",
"la Dot - Aya Nakamura",
"Ask About Me - B.ROB",
"Start it up - Alex Mali",
"Ma Soeur - Nej",
];
const mixList = document.querySelector(".my-songs");
const button = document.querySelector(".show-list");
const total = document.querySelector(".text");


//create the remove/hide functionality when clicking th button
button.addEventListener("click", function(){
   mySongs(myMusicList); 
    mixList.classList.remove("hide")
    button.classList.add("hide")
})

total.innerText=`My current top${myMusicList.length} songs `

//function that turns the array into html list elements
const mySongs = function(songs){
  //this is how we are able to access each string in the list we made
    songs.forEach(function (song, index){
let li = document.createElement("li")
li.classList.add("song")
li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`
  
mixList.append(li)
})
}