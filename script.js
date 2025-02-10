document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    const logo = document.querySelector('.logo img');

    btn.onclick = function() {
        this.classList.toggle('active');
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            logo.src = 'images/logo-dark.png';
        } else {
            logo.src = 'images/logo.png';
        }
    }

    function startSlideshow() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        setInterval(nextSlide, 8000);
    }
    
    startSlideshow();

    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var closeBtn = document.getElementsByClassName("close")[0];

    var images = document.getElementsByClassName("image-placeholder");
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            if (window.innerWidth > 480) { 
                modal.style.display = "block";
                var bg = window.getComputedStyle(this).backgroundImage;
                var imageUrl = bg.slice(5, -2); 
                modalImg.src = imageUrl;
            }
        });
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    modalImg.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
            event.preventDefault();
        }
    });
});