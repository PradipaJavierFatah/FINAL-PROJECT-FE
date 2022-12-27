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