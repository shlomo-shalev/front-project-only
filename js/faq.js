//קוד זה סוגר את התשובות הפתוחים וותח את התשובה של השאלה שנלחצה
var mazhavsection = {
    h1:"2",
    falsortrue: "1"
}
function faqopen(h1){
    for(var i = 1;i <=5;i++){
        var tagee = window.getComputedStyle(document.querySelector("section.faq section.sef" + i + " p.p" + i)).display;
        if(tagee != "none"){
            document.querySelector("section.faq section.sef" + i + " p.p" + i).style.display = "none";
            document.querySelector("section.faq section.sef" + i + " h1.h1-" + i).classList.remove("fa-angle-down");
            document.querySelector("section.faq section.sef" + i + " h1.h1-" + i).classList.add("fa-angle-right");
        }
    }

    if(mazhavsection.h1 == h1 && mazhavsection.falsortrue == "1"){
        mazhavsection.falsortrue = "0";
        document.querySelector("section.faq section.sef" + h1 + " h1.h1-" + h1).classList.remove("fa-angle-down");
    document.querySelector("section.faq section.sef" + h1 + " h1.h1-" + h1).classList.add("fa-angle-right");
    document.querySelector("section.faq section.sef" + h1 + " p.p" + h1).style.display = "none";
    }else{
        mazhavsection.falsortrue = "1";
        mazhavsection.h1 = h1;
    document.querySelector("section.faq section.sef" + h1 + " h1.h1-" + h1).classList.remove("fa-angle-right");
    document.querySelector("section.faq section.sef" + h1 + " h1.h1-" + h1).classList.add("fa-angle-down");
    document.querySelector("section.faq section.sef" + h1 + " p.p" + h1).style.display = "block";
    }
}

document.querySelector("section.faq section.sef1 h1.h1-1").addEventListener("click",function (){
    faqopen("1");
})
document.querySelector("section.faq section.sef2 h1.h1-2").addEventListener("click",function (){
    faqopen("2");
})
document.querySelector("section.faq section.sef3 h1.h1-3").addEventListener("click",function (){
    faqopen("3");
})
document.querySelector("section.faq section.sef4 h1.h1-4").addEventListener("click",function (){
    faqopen("4");
})
document.querySelector("section.faq section.sef5 h1.h1-5").addEventListener("click",function (){
    faqopen("5");
}) 