// Toggle navbar for mobile view
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
  };
}

// Highlight active nav link on scroll (for one-page scrolling sections)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        const targetLink = document.querySelector('header nav a[href*=' + sectionId + ']');
        if (targetLink) targetLink.classList.add('active');
      });
    }
  });
});

