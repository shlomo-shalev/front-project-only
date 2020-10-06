docAll('.quastion').forEach(element => {
    
    element.addEventListener('click', function(){

        var active = doc('.active-faq'),
            previousOfActive = active.previousSibling.previousElementSibling;
        
        previousOfActive.classList.remove('fa-angle-down');
        previousOfActive.classList.add('fa-angle-right');
        active.classList.remove('active-faq');
        
        this.classList.remove('fa-angle-right');
        this.classList.add('fa-angle-down');
        this.nextSibling.nextElementSibling.classList.add('active-faq');

    });

});