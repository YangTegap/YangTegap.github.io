window.onscroll = function () { stickyHeaderCheck() };

var headerBottom = document.getElementById("header-bottom");
var main = document.getElementsByTagName("main");
var sticky = headerBottom.offsetTop;

function stickyHeaderCheck() {
    if (window.pageYOffset > sticky) {
        headerBottom.classList.add("sticky");
        main[0].classList.add("sticky");
    } else {
        headerBottom.classList.remove("sticky");
        main[0].classList.remove("sticky");
    }
}