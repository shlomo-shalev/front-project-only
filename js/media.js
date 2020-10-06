// Update main image
docAll('.images').forEach(function (element){

    element.addEventListener('click', function(){

        var newUrlImg = this.src;
    
        doc('.active-img').classList.remove('active-img');
        this.classList.add('active-img');

        doc('.main-img').src = newUrlImg;
        
    });

});