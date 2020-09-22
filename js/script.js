//קוד זה מגלה את התפריט ניווט של האתר, הוא נגלה בעט לחיצה על הכפתור מצד שמאל במובייל
var go1 = function () {
    document.querySelector("header span.yecholot nav").style.animationName = "example";
    document.querySelector("header span.yecholot nav").style.display = "block";
}
document.querySelector("header span.yecholot .buttonav").addEventListener("click", go1);

//קוד זה מציג ומסתיר את רשימת הספקים שמופיעים תחת הכפתור שהם נמצאים מתחתיו,זה עובד גם במובייל
var go2 = function () {
    var tage = document.querySelector("div.donorsget span.openn");
    if (window.getComputedStyle(tage).display === "block") {
        tage.classList.remove("element5");
        tage.classList.add("element6");
        function ddd(){
            document.querySelector("header span.yecholot nav div.donorsget span.openn").classList.add("element7");
        }
        setTimeout(ddd,500);
    } else {
        tage.classList.remove("element6");
        tage.classList.remove("element7");
        tage.classList.add("element5");
    }
}
var oner1 = document.querySelector("header nav div.donorsget a.donors");
oner1.addEventListener("click", go2);

//מגדיר להסתיר את התפריט הניווט על ידי לחיצה על הכפתור איקס משמאל בתפריט רק במובייל
var go3 = function () {
    document.querySelector("header span.yecholot nav").style.animationName = "example1";
    function fff(){
        document.querySelector("header span.yecholot nav").style.display = 'none';
    }
    setTimeout(fff,1500);
}
document.querySelector("header span.yecholot nav .closed").addEventListener("click", go3);

//מגדיר כאשר אדם לוחץ על החיפוש במובייל נפתח לו כותרת חדשה ובה תיבת טקסט לחיפוש, חיפוש וסגירה
var msearth = document.querySelector("header span.boxsearch span.Search"),
    spanboxsearch = document.querySelector("header span.boxsearch"),
    textsearth = document.querySelector("header span.boxsearch input.textSearch"),
    backwards = document.querySelector("header span.boxsearch span.backwards");


var go4 = function () {
    var noblo = document.querySelector("header span.boxsearch input.textSearch");
    if (window.getComputedStyle(noblo).display === "none") {
        msearth.classList.add("element2");
        spanboxsearch.classList.add("element1");
        textsearth.classList.add("element3");
        backwards.classList.add("element4");
    }
}
document.querySelector("header span.boxsearch span.Search").addEventListener("click", go4);


var go5 = function () {
    msearth.classList.remove("element2");
    spanboxsearch.classList.remove("element1");
    textsearth.classList.remove("element3");
    backwards.classList.remove("element4");
}
document.querySelector("header span.boxsearch span.backwards").addEventListener("click", go5);

//מגדיר שכאשר לוחצים על לחצן כל הספקים בנו אז במובייל הנו נסגר אוטומטית וגם תג ספן האוופן ובמצב מחשב רק ספן האוופן

function nonenav(){
    openav = window.getComputedStyle(document.querySelector("header span.yecholot span.buttonav")).display;
    var tage = document.querySelector("div.donorsget span.openn");
    if (openav == "none"){
        tage.classList.add("element6");
        tage.classList.remove("element5");
    } else {
        document.querySelector("header nav").style.display = 'none';
        tage.classList.add("element6");
        tage.classList.remove("element5");
    }
}

document.querySelector("header nav div.donorsget span.openn a.dononame1").addEventListener("click", nonenav);

Object.prototype.getStyle = function (){
    return window.getComputedStyle(this);
};

function docAll(value){
    return document.querySelectorAll(value);
}

function doc(value){
    return document.querySelector(value);
}