document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openInstagram() {
    window.open('https://www.instagram.com/AncientWisdomUnlocked/', '_blank');
}

function subscribe() {
    alert('Subscription feature coming soon!');
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function filterCategory(category) {
    let articles = document.querySelectorAll('#articles article');
    articles.forEach(article => {
        article.style.display = article.classList.contains(category) ? 'block' : 'none';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("insta-feed").innerHTML = `
        <p>Instagram integration coming soon...</p>
        <img src="instagram_sample.jpg" alt="Instagram Post Preview">
    `;
});
