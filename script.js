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
    qabox.addEventListener("click",e => {

        e.currentTarget.classList.toggle('active');
        
        qabox.forEach(qabox => qabox.classList.remove('active'));
        
        
        // qabox.classList.toggle("active");
    });
});

// FAQs2
// function toggleAnswer(question) {
//     var answer = question.nextElementSibling;
  
//     if (answer.style.display === "block") {
//       answer.style.display = "none";
//     } else {
//       var content = question.parentNode;
//       var open = content.querySelectorAll('.abox-answer:not([style="display: none;"])');
//       for (var i = 0; i < open.length; i++) {
//         open[i].style.display = "none";
//       }
//       answer.style.display = "block";
//     }
//   }

//Other Event VC
let slideIn = 1;
showSlide(slideIn);

// Next/previous controls
function plusSlide(n) {
  showSlide(slideIn += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIn = n);
}

function showSlide(n) {
    let i;
    let slide = document.getElementsByClassName("mySlide");
    if (n > slide.length) {slideIn = 1}
    if (n < 1) {slideIn = slide.length}
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[slideIn-1].style.display = "flex";
}

//Other Event DW
let slideInz = 1;
showSlidez(slideInz);

// Next/previous controls
function plusSlidez(n) {
  showSlidez(slideInz += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidez(slideInz = n);
}

function showSlidez(n) {
    let i;
    let slidez = document.getElementsByClassName("mySlidez");
    if (n > slidez.length) {slideInz = 1}
    if (n < 1) {slideInz = slidez.length}
    for (i = 0; i < slidez.length; i++) {
        slidez[i].style.display = "none";
    }

    slidez[slideInz-1].style.display = "flex";
}