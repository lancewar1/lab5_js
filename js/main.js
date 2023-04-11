import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

    
   myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 20, callback: func2 },
    ];

    
    cueTimer.setup("vid", myCues);

   
    const vid = document.querySelector("#vid");
    const selectVid = document.querySelector("#video_select");
    const selectTxt = document.querySelector("#text-track");
    const display = document.getElementById("transcript");
    const transcript_en = document.getElementById("transcript-en");
    const transcript_es = document.getElementById("transcript-es");
    const transcript_fr = document.getElementById("transcript-fr");
    const showHide = document.getElementById("show-hide");


    
   
       
}





function func1() {
    document.getElementById("background").style.backgroundColor="blue"; 
}

function func2(){
    const spinach = document.getElementById("img"); 
    spinach.classList.toggle("hide")
    setTimeout(() =>{
        document.getElementById("img").classList.toggle("hide");
    },3000);
}