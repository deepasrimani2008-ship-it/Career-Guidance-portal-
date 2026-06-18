// Show message when "Get Started" button is clicked
function showMessage() {
    alert("Welcome! Start exploring career options 🚀");
}


// Search functionality
document.querySelector(".search-box button").addEventListener("click", function () {
    let input = document.querySelector(".search-box input").value.toLowerCase();

    if (input === "") {
        alert("Please enter something to search!");
        return;
    }

    // Simple keyword-based navigation
    if (input.includes("engineering")) {
        window.location.href = "streams.html";
    } 
    else if (input.includes("medical")) {
        window.location.href = "streams.html";
    } 
    else if (input.includes("tips")) {
        window.location.href = "tips.html";
    } 
    else if (input.includes("resources")) {
        window.location.href = "resources.html";
    } 
    else {
        alert("No results found 😢");
    }
});


// Contact form validation
function submitForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill all fields!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email!");
        return false;
    }

    alert("Form submitted successfully ✅");
    return true;
}


// Extra: Enter key search support
document.querySelector(".search-box input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        document.querySelector(".search-box button").click();
    }
});


// Extra: Smooth scroll for internal links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});