var points = docAll('.point'),
    isEnter = true;

// Updates the slide displayed on the page
function blocks(findIndex){

    if(!isEnter) return;
    isEnter = false;
    
    var blocks = docAll('.block'),
        indexActiveOld = 0;

    for(index in blocks){

        if(blocks[index].classList.contains('active')){
            
            indexActiveOld = index;
            break;

        }
        
    }
    
    var blocksLength = blocks.length,
        indexActiveNew = findIndex(indexActiveOld, blocksLength);
    
    if(indexActiveOld == indexActiveNew) return isEnter = true;

    var heightSlider = doc('.slider').getStyle().height;

    var activeNew = blocks[indexActiveNew];
    activeNew.classList.add('active');
    activeNew.style.top = heightSlider;


    function collback(){
        
        blocks[indexActiveOld].classList.remove('active');
        
        var pointOld = doc('.point.far');
        pointOld.classList.remove('far');
        pointOld.classList.add('fas');
        
        var pointNew = points[indexActiveNew];
        pointNew.classList.remove('fas');
        pointNew.classList.add('far');
        
        clearInterval(thisAutoSlider);
        autoSlider();
    }

    var activeOld = blocks[indexActiveOld];

    var animation = setInterval(function(){

        var topActiveOld = activeOld.getStyle().top,
            topActiveNew = activeNew.getStyle().top;

        activeOld.style.top = (parseInt(topActiveOld) - 1) + 'px';
        activeNew.style.top = (parseInt(topActiveNew) - 1) + 'px';

        if( topActiveOld == '-' + heightSlider ){

            collback();
            
            activeOld.style.top = '0px';
            activeNew.style.top = '0px';

            clearInterval(animation);
            
            isEnter = true;

        }

    }, 1);
    
    
}
// End Blocks


docAll('.arrows').forEach(function(value){

    value.addEventListener('click', function (){

        var thisArrow = this;
        blocks(function(indexActive, blocksLength) {
   
            blocksLength -= 1;
            var defaultIf = thisArrow.classList.contains('a-left') ? 0 : blocksLength;

            if( indexActive != defaultIf ){
                if(defaultIf == blocksLength) indexActive++;
                else indexActive--;
            }else{
                if(defaultIf == blocksLength) indexActive = 0;
                else indexActive = blocksLength;
            }
            return indexActive;
    
        });

    });

});

points.forEach(function(value){

    value.addEventListener('click', function(){

        blocks(function(){
            
            for(indexPoint in points){

                if(points[indexPoint] == value){

                    return indexPoint;
        
                }
                
            }

        });
    });

});

function autoSlider() {
    thisAutoSlider = setInterval(function(){
        doc('.a-right').click();
    }, 5000);
}
autoSlider();