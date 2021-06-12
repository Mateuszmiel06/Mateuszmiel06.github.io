(function ($) {
    "use strict"; // Start of use strict

// Collapse Navbar
var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// Po załadowaniu strony
document.addEventListener("DOMContentLoaded", function() {
    // Nowy <div>
    var backgroundCanvas = document.createElement("div");
    // Style CSS. Długość animiacji pow/pom, kursor, środek ekranu, ukrycie.
    backgroundCanvas.style.cssText = "position: fixed; top: 50%; left: 50%; width: 0; height: 0; z-index: 1; \
    background: rgba(0,0,0,0.9) none center/contain no-repeat; transition: all .8s ease-out; cursor: zoom-out;";
    // Dodanie do DOM
    document.body.appendChild(backgroundCanvas);
    // Czapka niewidka po kliknięciu w powiększony obrazek, czyli powrót do stanu 0
    backgroundCanvas.onclick = function() { 
        backgroundCanvas.style.top = "50%"; //Modyfikacja tylko animowanych styli css
        backgroundCanvas.style.left = "50%";
        backgroundCanvas.style.width = "0";
        backgroundCanvas.style.height = "0";
    };
    // Kolekcja wszystkich elementów (miniaturek) z .u-blowUpImg
    var zoomInImgLinks = document.getElementsByClassName("u-blowUpImg");
    // Dodanie obsługi kliknięcia na każdej miniaturce
    for(var i=0; i<zoomInImgLinks.length; ++i) zoomInImgLinks[i].addEventListener("click", function(e) {
        // Nie otwieraj linka i użyj javascript do powiększenia
        e.preventDefault();
        // Pokaż obrazek z href i animuj style (transition: all .8s ease-out;)
        backgroundCanvas.style.backgroundImage = "url('"+e.target.parentNode.href+"')";
        backgroundCanvas.style.top = "0";
        backgroundCanvas.style.left = "0";
        backgroundCanvas.style.width = "100%";
        backgroundCanvas.style.height = "100%";
    })
})