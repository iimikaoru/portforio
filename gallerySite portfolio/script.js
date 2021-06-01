"use strict";
const main = document.querySelector('main');
const input = document.querySelector('input');
input.addEventListener('input', e => {
    main.style.transform = `scale(${input.value})`;
});
//  is object fit supported
if (document.body.style.objectFit === undefined) {
    //  loop through all images    
    [].slice
        .call(document.querySelectorAll('img'))
        .map(img => {
        //  image has background-size cover or contain        
        if (['cover', 'contain']
            .indexOf(getComputedStyle(img).backgroundSize) !== -1) {
            //  use src as background image            
            img.style.backgroundImage = `url(${img.src})`;
            //  replace src with transparent gif
            img.src = 'data:;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        }
    });
}