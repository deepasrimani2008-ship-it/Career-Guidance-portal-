// Filter tips based on search
document.querySelector(".search-box button").addEventListener("click", filterTips);

document.getElementById("searchTips").addEventListener("keyup", filterTips);

function filterTips() {
    let input = document.getElementById("searchTips").value.toLowerCase();
    let tips = document.querySelectorAll("#tipsList li");

    tips.forEach(function(tip) {
        let text = tip.textContent.toLowerCase();

        if (text.includes(input)) {
            tip.style.display = "list-item";
        } else {
            tip.style.display = "none";
        }
    });
}