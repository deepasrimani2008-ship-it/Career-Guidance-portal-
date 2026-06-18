// Search filter for resources
document.querySelector(".search-box button").addEventListener("click", filterResources);
document.querySelector(".search-box input").addEventListener("keyup", filterResources);

function filterResources() {
    let input = document.getElementById("searchResources").value.toLowerCase();
    let cards = document.querySelectorAll(".resources-container .card");

    cards.forEach(card => {
        let text = card.textContent.toLowerCase();
        if(text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}