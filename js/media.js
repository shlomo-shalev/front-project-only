//קוד זה מגדיר מה קורה כאשר אדם לוחץ על תמונה שיש בגלרייה
function galleryimgbox(namimg){
    var imgsrc = document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img" + namimg).src;
    for(var i = 1;i <=18;i++){
        var tageht = window.getComputedStyle(document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img" + i)).opacity;
        if(tageht == "1"){
            document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img" + i).style.opacity  = "0.7";
        }else{
        }
    }
    document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img" + namimg).style.opacity = "1";
    document.querySelector("section.gallery div.imgboxbig img").src = imgsrc;
    if(document.querySelector("section.gallery div.imgboxbig img").style.animationName == "opaimg2"){
    document.querySelector("section.gallery div.imgboxbig img").style.animationName = "opaimg";
    }else{
    document.querySelector("section.gallery div.imgboxbig img").style.animationName = "opaimg2";
    }
}

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img1").addEventListener("click", function (){
    galleryimgbox("1");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img2").addEventListener("click", function (){
    galleryimgbox("2");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img3").addEventListener("click", function (){
    galleryimgbox("3");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img4").addEventListener("click", function (){
    galleryimgbox("4");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img5").addEventListener("click", function (){
    galleryimgbox("5");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img6").addEventListener("click", function (){
    galleryimgbox("6");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img7").addEventListener("click", function (){
    galleryimgbox("7");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img8").addEventListener("click", function (){
    galleryimgbox("8");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img9").addEventListener("click", function (){
    galleryimgbox("9");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img10").addEventListener("click", function (){
    galleryimgbox("10");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img11").addEventListener("click", function (){
    galleryimgbox("11");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img12").addEventListener("click", function (){
    galleryimgbox("12");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img13").addEventListener("click", function (){
    galleryimgbox("13");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img14").addEventListener("click", function (){
    galleryimgbox("14");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img15").addEventListener("click", function (){
    galleryimgbox("15");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img16").addEventListener("click", function (){
    galleryimgbox("16");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img17").addEventListener("click", function (){
    galleryimgbox("17");
});

document.querySelector("section.gallery div.boxgallery div.galleryimgmini img.img18").addEventListener("click", function (){
    galleryimgbox("18");
});

//קוד זה מגדיר מה קורה כאשר לוחצים על החצים השמאלי והימני
function leftrighton(leftorright){
    var margg = window.getComputedStyle(document.querySelector("section.gallery div.boxgallery div.galleryimgmini")).marginLeft;
    var nam2 = "";
    for(var i = 0;i<margg.length;i++){
        if(margg[i] == 1 || margg[i] == "-" || margg[i] == 2 || margg[i] == 3 || margg[i] == 4 || margg[i] == 5 || margg[i] == 6 || margg[i] == 7 || margg[i] == 8 || margg[i] == 9 || margg[i] == 0){
            if(nam2 == ""){
            nam2 = margg[i];
            }else{
            nam2 += margg[i];
            }
        }else {
        }
    }
    if (leftorright == "rightgllery"){
    var ggg = Number(nam2) + -100 + "px";
    }else {
        var ggg = Number(nam2) + 100 + "px";
    }
 
    if(ggg == "-1000px"){
        document.querySelector("section.gallery div.boxgallery button.rightgllery").disabled = true;
        document.querySelector("section.gallery div.boxgallery button.rightgllery").style.opacity = "0.5";
    } else{
        document.querySelector("section.gallery div.boxgallery button.rightgllery").disabled = false;
        document.querySelector("section.gallery div.boxgallery button.rightgllery").style.opacity = "1";
    }
    
    if(ggg == "0px"){
        document.querySelector("section.gallery div.boxgallery button.leftgllery").disabled = true;
        document.querySelector("section.gallery div.boxgallery button.leftgllery").style.opacity = "0.5";
    }else {
        document.querySelector("section.gallery div.boxgallery button.leftgllery").disabled = false;
        document.querySelector("section.gallery div.boxgallery button.leftgllery").style.opacity = "1";
    
}
if(nam2 == "0" && leftorright == "leftgllery"){
    ggg = 0;
    document.querySelector("section.gallery div.boxgallery button.leftgllery").disabled = true;
    document.querySelector("section.gallery div.boxgallery button.leftgllery").style.opacity = "0.5";
}

    document.querySelector("section.gallery div.boxgallery div.galleryimgmini").style.marginLeft =  ggg;
}

document.querySelector("section.gallery div.boxgallery button.rightgllery").addEventListener("click",function(){
    leftrighton("rightgllery");
});

document.querySelector("section.gallery div.boxgallery button.leftgllery").addEventListener("click",function(){
    leftrighton("leftgllery");
});