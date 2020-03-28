

function setPage(event) {
    var pageId = event.target.id;
    var allPages = document.querySelectorAll('[class*="js-page"]');
    var allMenuItems = document.querySelectorAll('.js-menu-item');
    allPages.forEach(function(element) {
        if (element.classList.contains('js-' + pageId)) {
            element.classList.add('is-active');
        } else {
            element.classList.remove('is-active');
        }
    })
    allMenuItems.forEach(function(element) {
        if (element.id === pageId) {
            element.classList.add('is-active');
        } else {
            element.classList.remove('is-active');
        }
    })
}

window.addEventListener('load', function() {    
    document.querySelectorAll('.js-menu-item').forEach(function(element) {        
        element.addEventListener('click', setPage);
    })
})