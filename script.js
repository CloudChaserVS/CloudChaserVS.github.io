const toggleBtn = document.querySelector('.toggleBtn');
const toggleBtnIcon = document.querySelector('.toggleBtn i');
const dropDownMenu = document.querySelector('.dropDownMenu');

toggleBtn.onclick = function () 
{
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')  

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// AGE VALIDATION
document.addEventListener("DOMContentLoaded", function() 
{
    var modal = document.getElementById("myModal");
    var yesBtn = document.getElementById("yesBtn");
    var noBtn = document.getElementById("noBtn");

    // Check if the user has already confirmed their age
    var ageConfirmed = localStorage.getItem("ageConfirmed");

    // If the age has not been confirmed, display the modal
    if (!ageConfirmed) 
    {
        modal.style.display = "block";
    }

    yesBtn.onclick = function() 
    {
        // Set the flag indicating that the age has been confirmed
        localStorage.setItem("ageConfirmed", true);
        modal.style.display = "none";
    }

    noBtn.onclick = function() 
    {
        window.location.href = "https://www.google.com";
    }
});

let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();
function currentSlide(index) 
{
    slideIndex = index;
    showSlides();
}

function plusSlides(step) 
{
    
    if(step < 0) 
    {
        slideIndex -= 2;
        
        if(slideIndex < 0) 
        {
            slideIndex = slides.length - 1;
        }
    }
    
    showSlides();
}

function showSlides() 
{
    for(let i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }

    slideIndex++;
    if(slideIndex > slides.length) 
    {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');

    if(timeoutId) 
    {
        clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}