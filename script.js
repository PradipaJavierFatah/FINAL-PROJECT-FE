//preload
$(window).on('load', function(){
    $(".preload").fadeTo(3000,1).fadeOut(3000);
    $(".container").fadeIn(5000);
})

//Navbar
const navbar = document.getElementById('navbar');
let prevYpos = 0; // nilai awal

window.onscroll = function(){
    const Ypos = window.scrollY;
    if(Ypos > prevYpos){
        navbar.style.top = navbar.offsetHeight * -1 + 'px';
    }else{
        navbar.style.top = '0px'
    }
    prevYpos = Ypos;
}

//Mentor
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
}

//FAQs
const faqs = document.querySelectorAll(".qabox");

faqs.forEach(qabox => {
    qabox.addEventListener("click", () => {

        // qabox.forEach((qabox) => {
        //     if(e.target.nextElementSibling !== qabox && qabox.classList.contains("active")) {
        //         qabox.classList.remove("active");
        //     }
        // });

        qabox.classList.toggle("active");
    });
});
