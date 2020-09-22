var isOpen = true;

doc('.open').addEventListener('click', function(){

    if( ! isOpen ) return;
    isOpen = false;

    var iframe = doc('.main-baner').children[0],
        thisOpen = this,
        iframeStyle = iframe.getStyle(),
        iframeWidth = iframeStyle.width,
        iframeWidthNew = iframeStyle.display == 'none' ? '0px' : '250px',
        timeOut = iframeWidthNew == '0px' ? '250px' : '0px',
        isNone = iframe.classList.contains('d-none'),
        arrowLeft = doc('.a-left');
        
        arrowLeft.classList.add('zi-3')

        iframe.classList.remove('d-none');
        
        iframe.style.width = iframeWidthNew;
        
        function collback(thisOpen){
            
            if( ! isNone ){

                iframe.classList.add('d-none');
                arrowLeft.classList.remove('zi-3');
                
            } 
            thisOpen.classList.toggle('fa-chevron-right');
            thisOpen.classList.toggle('fa-chevron-left');
            
        }
        
        var animation = setInterval(function(){
            
            iframeWidth = parseInt(iframe.style.width);
            var width = timeOut == '250px' ? ++iframeWidth : --iframeWidth;
            iframe.style.width = width + 'px';
            
            if( iframeStyle.width == timeOut ){
                
                collback(thisOpen);
                clearInterval(animation);
                isOpen = true;
    
            }
    
        }, 1);

});