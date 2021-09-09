// for Slider
document.getElementById("ss").addEventListener("click", () => {
    document.getElementById("model").classList.add("show");
});
document.getElementById("close").addEventListener("click", () => {
    document.getElementById("model").classList.remove("show");
});

// for form

document.getElementById("frm").addEventListener("click", () => {
    document.getElementById("model2").classList.add("show1");
});
document.getElementById("btn1").addEventListener("click", () => {
    document.getElementById("model2").classList.remove("show1");
});

document.getElementById("go-reg").addEventListener("click", () => {
    document.getElementById("reg").classList.add("opn");
});
document.getElementById("back-to-login").addEventListener("click", () => {
    document.getElementById("reg").classList.remove("opn");
});
// for hover - box

document.getElementById("hb").addEventListener("click", () => {
    document.getElementById("imodel").classList.add("show2");
});
document.getElementById("iclose").addEventListener("click", () => {
    document.getElementById("imodel").classList.remove("show2");
});
// for music mod

document.getElementById("mb").addEventListener("click", () => {
    document.getElementById("musicbox").classList.add("show3");
});
document.getElementById("mclose").addEventListener("click", () => {
    document.getElementById("musicbox").classList.remove("show3");
});
// for neon-txt

document.getElementById("nb").addEventListener("click", () => {
    document.getElementById("nc").classList.add("showfun");
});
document.getElementById("cl").addEventListener("click", () => {
    document.getElementById("nc").classList.remove("showfun");
});
// for neon-txt

document.getElementById("ui-btn").addEventListener("click", () => {
    document.getElementById("ui").classList.add("show4");
});
document.getElementById("ui-close").addEventListener("click", () => {
    document.getElementById("ui").classList.remove("show4");
});

// function under g
let i = 0;
let images = [];
let interval = 3000;

// image list
images[1] = "slider-1.jpg";
images[2] = "slider-2.jpg";
images[0] = "slider-3.jpg";
images[3] = "slider-4.jpg";

// image changing   function
setInterval(() => {
    if (i < images.length) {
        document.getElementById("i1").src = images[i];

        i++;
    } else {
        i = 0;
    }
}, interval);

// mMusic bar Function

function Musicbar() {
    document.getElementById("bar1").classList.add("work");
    document.getElementById("bar2").classList.add("work");
    document.getElementById("bar3").classList.add("work");
    document.getElementById("bar4").classList.add("work");
    document.getElementById("bar5").classList.add("work");
    document.getElementById("bar6").classList.add("work");
    document.getElementById("bar7").classList.add("work");
    document.getElementById("border").classList.add("start");
    document.getElementById("mclose").classList.add("start");
}

function Musicbar0() {
    document.getElementById("bar1").classList.remove("work");
    document.getElementById("bar2").classList.remove("work");
    document.getElementById("bar3").classList.remove("work");
    document.getElementById("bar4").classList.remove("work");
    document.getElementById("bar5").classList.remove("work");
    document.getElementById("bar6").classList.remove("work");
    document.getElementById("bar7").classList.remove("work");
    document.getElementById("border").classList.remove("start");
    document.getElementById("mclose").classList.remove("start");
}
// for neon light
document.getElementById("n1").addEventListener("mouseenter", () => {
    var mysound = document.getElementsByTagName("audio");
    mysound[1].currentTime = 0.7;
    mysound[1].play();
});
document.getElementById("n2").addEventListener("mouseenter", () => {
    var mysound = document.getElementsByTagName("audio");
    mysound[1].currentTime = 0.7;
    mysound[1].play();
});
document.getElementById("n3").addEventListener("mouseenter", () => {
    var mysound = document.getElementsByTagName("audio");
    mysound[1].currentTime = 0.7;
    mysound[1].play();
});

document.getElementById("n1").addEventListener("mouseleave", () => {
    var mysound = document.getElementsByTagName("audio");
    mysound[1].currentTime = 0.7;
    mysound[1].pause();
});
document.getElementById("n2").addEventListener("mouseleave", () => {
    var mysound = document.getElementsByTagName("audio");
    mysound[1].currentTime = 0.7;
    mysound[1].pause();
});
document.getElementById("n3").addEventListener("mouseleave", () => {
    var mysound = document.getElementsByTagName("audio");
    mysound[1].currentTime = 0.7;
    mysound[1].pause();
});

// for canvas game

function game1() {
    var myWindow = window.open("game1.html", "Game", "width=1140,height=500");
}

function game2() {
    var myWindow = window.open("game2.html", "Game", "width=1100,height=1500");
}