
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

    // 2. Search box alert
    var searchBtn = document.querySelector('.search-box button');
    var searchInput = document.querySelector('.search-box input');

    if(searchBtn && searchInput){
        searchBtn.addEventListener('click', function() {
            var query = searchInput.value.trim();
            if(query === ""){
                alert("Please enter something to search!");
            } else {
                alert("Searching for: \"" + query + "\"");
            }
        });
    }

    // 3. Smooth scroll for internal links (optional)
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var j = 0; j < anchors.length; j++) {
        anchors[j].addEventListener('click', function(e){
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});
