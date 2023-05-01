const circleImage = document.getElementsByClassName("vinyl")[0];
const mainFlex = document.getElementById("main")
const wave = document.getElementById("wave");
const songName = document.getElementById("song-name");

const navBar = document.getElementsByClassName("bar_link");

const navBarArr = Array.from(navBar);
let active = navBarArr[0];

const image1 = document.getElementById("me");
const image2 = document.getElementById("drawing");

let imgTop = image2;

const clickSound = new Audio("Click.wav")
const music = new Audio();

const vColorList = ['#0071BC', '#8CC63F', '#B2B2B2', '#F7931E', '#662D91', '#BF0000'];

let currentIndex = 1;
let index = 1;

const socialIcons = document.getElementsByClassName("icon");
const iconsArr = Array.from(socialIcons);

const links = ["https://www.facebook.com/profile.php?id=100004034994066","https://www.instagram.com/mahmoud.qaisi1/","https://wa.me/972568983965","https://www.linkedin.com/in/mahmoud-qaisi-257170257","https://github.com/MahmoudQaisi1"]



const songNames = ["Under Pressure - Queen & David Bowie", "Everywhere - Fleetwood Mac", "Take On me - a-ha", "Don't Stop Me now - Queen", "Dreams - Fleetwood Mac", "Wake me up Before you go go - Wham!"];

let songNum = 0;

const plyBtn = document.getElementById("play");
const plyBtnImg = document.querySelector("#play img");
let play = true;

setTimeout(()=>{
    songNum = 1;
    music.src = 1 + ".mp3";
    music.muted = false;
    if(play){
        music.play();
    }

},1500);

plyBtn.addEventListener('click',() =>{
    play = !play;

    if(play){
        music.play();
        plyBtnImg.src = "pause.svg";
    }else{
        music.pause();
        plyBtnImg.src = "play.svg";
    }

});

iconsArr.forEach(function (item,i) {
    item.addEventListener('click',() => {
        window.open(links[i],"_blank");
    })
});


setInterval(()=>{
if(index === currentIndex && navBarArr.indexOf(active) === (index - 1) && songNum !== index){

    songName.textContent = songNames[index - 1];
    songNum = index;
    music.src = index + ".mp3";
    music.muted = false;

    if(play){
        music.play();
    }
    
}
},1500);

setInterval(() =>{
if(index === currentIndex && navBarArr.indexOf(active) !== (index - 1)){
    navBarArr[index-1].classList.add("active");
    active.classList.remove("active");
    active = navBarArr[index-1];
    clickSound.play();
    
}
}, 500); 

mainFlex.addEventListener('scroll', () => {
    const scrollTop = mainFlex.scrollTop;
    const scrollHeight = mainFlex.scrollHeight;
    const clientHeight = mainFlex.clientHeight;
    index = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 5 + 1);
    fadeInOut();
    if (index !== currentIndex) {
        setTimeout(function() {
            music.pause();
            currentIndex = index;
            circleImage.src = currentIndex +'.svg';
        }, 50);
    }
});

function SwitchImages() {
    if (imgTop === image2) {
        image1.style.left = "+165%";
        
        setTimeout(function() {
            image1.style.zIndex = "1";
            image1.style.left = '55%';
            image1.style.width = "350px";
        }, 750);
        
        imgTop = image1;
    } else{
        image1.style.left = "+165%";
        
        setTimeout(function() {
            image1.style.width = "250px";
            image1.style.zIndex = "-1";
            image1.style.left = '70%';
        }, 750);
        imgTop = image2;
    }
}

image1.addEventListener('click',SwitchImages);
image2.addEventListener('click',SwitchImages);

function fadeInOut() {
    circleImage.style.left = '-25%';
    wave.style.opacity = 0;
    wave.style.bottom = "-100%"
    setTimeout(function() {
        circleImage.style.left = '0';
        wave.style.opacity = 1;
        wave.style.bottom = "0"
    }, 150); 
}

navBarArr.forEach(function(item) {
    item.addEventListener('click', () =>{
        if(item !== active){
            item.classList.add("active");
            active.classList.remove("active");
            active = item;
            songName.style.color = vColorList[navBarArr.indexOf(active)]
        }
        clickSound.play();
    });
});

var vara = new Vara("#vara-container","Parisienne.json",[{
    text:" Mahmoud Qaisi ",
    duration:2000,
    delay:1500,
    color:"white",
    textAlign:"center",
    y: 20
}],{
    fontSize:70,
    strokeWidth:2
});




