// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Animations
gsap.to('.hero-content', {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power3.out'
});

gsap.to('.projects h2', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.projects h2',
    start: 'top 80%'
  }
});

gsap.to('.project-card', {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.project-grid',
    start: 'top 80%'
  }
});
