// Search feature
document.querySelector(".search-box button").addEventListener("click", function () {
    let input = document.querySelector(".search-box input").value.toLowerCase();

    if (input.includes("engineering")) {
        alert("Engineering: Mechanical, Civil, CSE, AI");
    } 
    else if (input.includes("medical")) {
        alert("Medical: MBBS, Nursing, Pharmacy");
    } 
    else {
        alert("No results found");
    }
});