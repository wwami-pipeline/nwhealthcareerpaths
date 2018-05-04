
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var scrollElems = document.querySelectorAll('.scrollspy');
    var scroll = M.ScrollSpy.init(scrollElems);

    });