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
