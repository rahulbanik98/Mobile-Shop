var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) 
{
    showSlides(slideIndex = n);
}

function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length)
    {
        slideIndex = 1
    }

    if (n < 1) 
    {
        slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function firstslideShow ()
{
    document.getElementById("firstImage").src="./slideImg/slide-img-1.jpg";
}

function secondslideShow ()
{
    document.getElementById("firstImage").src="./slideImg/slide-img-2.jpg";
}

function thirdslideShow ()
{
    document.getElementById("firstImage").src="./slideImg/slide-img-3.jpg";
}

function fourthslideShow ()
{
    document.getElementById("firstImage").src="./slideImg/slide-img-4.jpg";
}

function fifthslideShow ()
{
    document.getElementById("firstImage").src="./slideImg/slide-img.jpg";
}

setInterval(firstslideShow, 5000);
setInterval(secondslideShow, 10000);
setInterval(thirdslideShow, 15000);
setInterval(fourthslideShow, 200000);
setInterval(fifthslideShow, 250000);
