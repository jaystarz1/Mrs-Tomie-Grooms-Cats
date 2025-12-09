/* =====================================================
   Mrs. Tomei Grooms Cats - Main JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle - support both .nav-toggle and .mobile-menu-btn
    const navToggle = document.querySelector('.nav-toggle') || document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking a link (but not dropdown toggles)
        const navLinks = navMenu.querySelectorAll('a:not(.nav-dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Mobile Dropdown Toggle
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.parentElement;

            // On mobile, toggle the dropdown
            if (window.innerWidth <= 768) {
                dropdown.classList.toggle('active');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(74, 18, 89, 0.15)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(74, 18, 89, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Form submission handling (placeholder - would need backend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // For demo purposes, show an alert
            alert('Thank you for your message! We will get back to you soon.\n\nNote: This is a demo form. In production, this would send to an email or booking system.');

            // Reset form
            this.reset();
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe service cards and other animated elements
    document.querySelectorAll('.service-card, .benefit, .location-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Cookie Consent functionality
    function checkCookieConsent() {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            document.getElementById('cookie-consent').style.display = 'block';
        }
    }

    checkCookieConsent();

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            const expanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Toggle current item if it wasn't already active
            if (!isActive) {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

});

// Cookie consent functions (global scope for onclick handlers)
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-consent').style.display = 'none';
    // Initialize analytics here if needed
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookie-consent').style.display = 'none';
}
