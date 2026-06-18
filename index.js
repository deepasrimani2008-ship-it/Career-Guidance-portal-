// Modal popup controls
function showModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function selectOption(option) {
  alert("You selected: " + option + " stream.\nNext, you can add your course list or redirect to a page.");
  closeModal();
}

// Search: filter career cards
document.getElementById("searchBtn").addEventListener("click", () => {
  searchCards();
});

document.getElementById("searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchCards();
  }
});

function searchCards() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(input)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}

// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Sticky navbar on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Contact form submit (validation + success message)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!message) {
    alert("Please enter your message.");
    return;
  }

  alert("Thank you! Your message has been sent.");
  document.getElementById("contactForm").reset();
});