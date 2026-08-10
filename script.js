const slides = document.querySelectorAll(".memory");
let current = 0;

function showSlide(index){
    slides.forEach(s=>s.classList.remove("active"));

    if(index<0) current=slides.length-1;
    else if(index>=slides.length) current=0;
    else current=index;

    slides[current].classList.add("active");

    document.getElementById("counter").innerText =
        `${current+1} / ${slides.length}`;
}

function nextSlide(){
    showSlide(current+1);
}

function prevSlide(){
    showSlide(current-1);
}

window.onload=()=>{
    showSlide(0);
};