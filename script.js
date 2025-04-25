// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio items data
const portfolioItems = [
    {
        title: "Travel Booking System",
        description: "A comprehensive travel booking platform built with Python, Flask, HTML, CSS, and SQL. Features include hotel reservations, car rentals, flight bookings, cruise packages, and travel tour management. The system includes user authentication, payment processing, and real-time availability checking.",
        technologies: "Python, Flask, HTML, CSS, SQL",
        link: "http://www.mmdrezamytrip.ir",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
        title: "Electronic Components Inventory",
        description: "A web-based inventory management system for electronic components. Built with Python, Flask, HTML, CSS, JavaScript, and SQL. Features include real-time inventory tracking, component categorization, supplier management, and automated reordering alerts.",
        technologies: "Python, Flask, HTML, CSS, JavaScript, SQL",
        link: "http://www.etesystemmanagement.ir",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    }
];

// Function to create portfolio items
function createPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <div class="portfolio-card">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="technologies">
                        <strong>Technologies:</strong> ${item.technologies}
                    </div>
                    <a href="${item.link}" target="_blank" class="portfolio-link">View Project</a>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createPortfolioItems();
});

// Add smooth scroll behavior to the page
document.documentElement.style.scrollBehavior = 'smooth'; 
