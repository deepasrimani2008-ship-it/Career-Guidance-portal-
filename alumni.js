
// Wait until the page is fully loaded
window.addEventListener('load', function() {

    // 1. Highlight the current page in the navbar
    var navLinks = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < navLinks.length; i++) {
        if(navLinks[i].href === window.location.href){
            navLinks[i].style.color = '#00c6a9'; // green accent
            navLinks[i].style.fontWeight = '600';
        }
    }

    // 2. Add simple click effect to alumni cards
    var cards = document.querySelectorAll('.alumni-card');
    for (var j = 0; j < cards.length; j++) {
        cards[j].addEventListener('click', function() {
            // Toggle a small zoom effect
            if(this.style.transform === "scale(1.05)"){
                this.style.transform = "scale(1)";
            } else {
                this.style.transform = "scale(1.05)";
            }
        });
    }

    // 3. Smooth scroll for internal links (optional)
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var k = 0; k < anchors.length; k++) {
        anchors[k].addEventListener('click', function(e){
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});
