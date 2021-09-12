v1 = document.getElementById("vid-1");
x1 = document.getElementById("hvid-1");
c1 = document.getElementById("vc1");
c1.addEventListener("mouseenter", () => {
    v1.style.zIndex = "-4";
    x1.style.zIndex = "5";
    x1.muted = true;
    x1.play();

    // setInterval(() => {
    //     x1.pause();

    //     v1.style.zIndex = "5";
    // }, 1000);
});

c1.addEventListener("mouseleave", () => {
    x1.pause();
    v1.style.zIndex = "5";
    x1.style.zIndex = "-4";
});
//=======================================================
c2 = document.getElementById("vc2");
v2 = document.getElementById("vid-2");
x2 = document.getElementById("hvid-2");
c2.addEventListener("mouseenter", () => {
    v2.style.zIndex = "-4";
    x2.style.zIndex = "5";
    x2.muted = true;
    x2.play();
});

c2.addEventListener("mouseleave", () => {
    x2.style.zIndex = "-5";
    v2.style.zIndex = "5";
    x2.pause();
});
//========================================================

c3 = document.getElementById("vc3");
x3 = document.getElementById("hvid-3");
v3 = document.getElementById("vid-3");
c3.addEventListener("mouseenter", () => {
    v3.style.zIndex = "-4";
    x3.style.zIndex = "5";
    x3.muted = true;
    x3.play();
});

c3.addEventListener("mouseleave", () => {
    x3.style.zIndex = "-5";
    x3.pause();
    v3.style.zIndex = "5";
});
//========================================================

c4 = document.getElementById("vc4");
x4 = document.getElementById("hvid-4");
v4 = document.getElementById("vid-4");
c4.addEventListener("mouseenter", () => {
    v4.style.zIndex = "-4";
    x4.style.zIndex = "5";
    x4.muted = true;
    x4.play();
});

c4.addEventListener("mouseleave", () => {
    x4.style.zIndex = "-5";
    x4.pause();
    v4.style.zIndex = "5";
});
//========================================================
var B = document.getElementById("before");
var P1 = document.getElementById("onply");
var P2 = document.getElementById("onply1");

function playf() {
    B.style.opacity = "0";
    B.style.pointerEvents = "none";
    B.style.zIndex = "-1";
    B.style.display = "none";

    P2.style.opacity = "0";
    P2.style.pointerEvents = "none";
    P2.style.zIndex = "-1";
    P2.style.display = "none";

    P1.style.opacity = "1";
    P1.style.zIndex = "1";
    P1.style.top = "0";
    P1.style.pointerEvents = "all";
    P1.style.display = "block";
}

function plays() {
    B.style.opacity = "0";
    B.style.pointerEvents = "none";
    B.style.zIndex = "-1";
    B.style.display = "none";

    P1.style.opacity = "0";
    P1.style.pointerEvents = "none";
    P1.style.zIndex = "-1";
    P1.style.display = "none";

    P2.style.opacity = "1";
    P2.style.zIndex = "1";
    P2.style.top = "0";
    P2.style.pointerEvents = "all";
    P2.style.display = "block";
}

function cloosevideo() {
    B.style.display = "block";
    B.style.opacity = "1";
    B.style.zIndex = "2";
    B.style.pointerEvents = "all";

    P1.style.opacity = "0";
    P1.style.pointerEvents = "none";
    P1.style.zIndex = "-1";
    P1.style.display = "none";

    P2.style.opacity = "0";
    P2.style.pointerEvents = "none";
    P2.style.zIndex = "-1";
    P2.style.display = "none";
}

function toDark() {
    var all = document.getElementById("all");
    all.classList.remove("bg-light");
    all.classList.remove("text-dark");
    all.classList.add("text-light");
    all.classList.add("bg-dark");
    document.getElementById("path7435").style.fill = "#fff";
    document.getElementById("path7437").style.fill = "#fff";
    document.getElementById("path7439").style.fill = "#fff";
    document.getElementById("path7441").style.fill = "#fff";
    document.getElementById("path7443").style.fill = "#fff";
    document.getElementById("path7445").style.fill = "#fff";
    document.getElementById("path7447").style.fill = "#fff";
    document.getElementById("g1").style.fill = "#fff";
    document.getElementById("g2").style.fill = "#fff";
    document.getElementById("g3").style.fill = "#fff";
    document.getElementById("g4").style.fill = "#fff";
    document.getElementById("g5").style.fill = "#fff";
    document.getElementById("g6").style.fill = "#fff";
    document.getElementById("g7").style.fill = "#fff";
    document.getElementById("g8").style.fill = "#fff";
    document.getElementById("g9").style.fill = "#fff";
    document.getElementById("g10").style.fill = "#fff";
}

function tolight() {
    var all = document.getElementById("all");
    all.classList.remove("text-light");
    all.classList.remove("bg-dark");
    all.classList.add("bg-light");
    all.classList.add("text-dark");
    document.getElementById("path7435").style.fill = "#000";
    document.getElementById("path7439").style.fill = "#000";
    document.getElementById("path7437").style.fill = "#000";
    document.getElementById("path7441").style.fill = "#000";
    document.getElementById("path7443").style.fill = "#000";
    document.getElementById("path7445").style.fill = "#000";
    document.getElementById("path7447").style.fill = "#000";
    document.getElementById("g1").style.fill = "#000";
    document.getElementById("g2").style.fill = "#000";
    document.getElementById("g3").style.fill = "#000";
    document.getElementById("g4").style.fill = "#000";
    document.getElementById("g5").style.fill = "#000";
    document.getElementById("g6").style.fill = "#000";
    document.getElementById("g7").style.fill = "#000";
    document.getElementById("g8").style.fill = "#000";
    document.getElementById("g9").style.fill = "#000";
    document.getElementById("g10").style.fill = "#000";
}