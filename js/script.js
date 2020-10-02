Object.prototype.getStyle = function (){
    return window.getComputedStyle(this);
};

function docAll(value){
    return document.querySelectorAll(value);
}

function doc(value){
    return document.querySelector(value);
}

// Mobile search panel
var search = doc('span.search'),
    boxSearch = doc('span.box-search'),
    inputSearch = doc('input.text-search'),
    exit = doc('span.exit');

search.addEventListener('click', function(){

    if(inputSearch.getStyle().display == 'none'){

        search.classList.add("element2");
        boxSearch.classList.add("element1");
        inputSearch.classList.add("element3");
        exit.classList.add("element4");

    }

});

exit.addEventListener('click', function(){

    search.classList.remove("element2");
    boxSearch.classList.remove("element1");
    inputSearch.classList.remove("element3");
    exit.classList.remove("element4");

});

// Mobile menu
var nav = doc('nav'),
    body = doc('body'),
    noEnter = false;

var closeNav = function(){
    
    if(noEnter) return;
    noEnter = true;

    var animate = setInterval(function (){

        var navMinWidth = nav.style.minWidth;
        nav.style.minWidth = (parseInt(navMinWidth) - 1) + '%';
        if(navMinWidth == '0%'){
        
            clearInterval(animate);
            nav.style.display = 'none';
            body.style.overflow = 'auto';
            noEnter = false;
        
        }

    }, 10);
    animate;
    
};

doc('.hamburger').addEventListener('click', function(){

    if(noEnter) return;
    noEnter = true;
    nav.style.display = 'block';
    body.style.overflow = 'hidden';

    nav.style.minWidth = '0%';
    var animate = setInterval(function (){

        var navMinWidth = nav.style.minWidth;
        nav.style.minWidth = (parseInt(navMinWidth) + 1) + '%';
        if(navMinWidth == '69%'){
        
            clearInterval(animate);
            noEnter = false;
        
        }

    }, 10);
    animate;

});
doc('.donors-btn').addEventListener('click', closeNav);
doc('.closed').addEventListener('click', closeNav);