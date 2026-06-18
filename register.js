document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault(); // prevent actual submission
    alert("Thank you for registering! We'll contact you soon.");
    this.reset(); // clears the form
});