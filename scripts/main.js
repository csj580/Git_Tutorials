const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const DETAIL_LINK_SELECTOR = '[data-image-url="url"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const THUMBNAIL_LINK_SELECTOR2 = '[data-image-role2="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
const ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
    'use strict';
    // Code will go here
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.innerText = titleText;
}

function imageFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumbnail){
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb){
    'use strict';
    thumb.addEventListener('click', function(event){
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    }); 
}
function getThumbnailsArray(){
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails(){
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails(){
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function(){
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}


function addKeyPressHandler(){
    'use strict';
    document.body.addEventListener('keyup', function(event){
        event.preventDefault();
        if(event.keyCode === ESC_KEY){
            hideDetails();
        }
    });
}

(function initializeEvents(thumbnails){
    'use strict';
    thumbnails.forEach(addThumbClickHandler);    
})(getThumbnailsArray());