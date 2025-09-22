// apak-adip.js
// JavaScript to add cool effects to the homepage sections

document.addEventListener('DOMContentLoaded', () => {
  // Animate hero section heading and paragraph on page load
  const heroSection = document.getElementById('hero-section');
  if (heroSection) {
    const heading = heroSection.querySelector('h2');
    const paragraph = heroSection.querySelector('p');
    const button = heroSection.querySelector('a.btn');

    if (heading) {
      heading.style.opacity = 0;
      heading.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heading.style.opacity = 1;
        heading.style.transform = 'translateY(0)';
      }, 200);
    }

    if (paragraph) {
      paragraph.style.opacity = 0;
      paragraph.style.transform = 'translateY(20px)';
      setTimeout(() => {
        paragraph.style.transition = 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s';
        paragraph.style.opacity = 1;
        paragraph.style.transform = 'translateY(0)';
      }, 400);
    }

    if (button) {
      button.style.opacity = 0;
      button.style.transform = 'scale(0.8)';
      setTimeout(() => {
        button.style.transition = 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s';
        button.style.opacity = 1;
        button.style.transform = 'scale(1)';
      }, 800);
    }
  }

  // Add scroll reveal effect for features section
  const features = document.querySelectorAll('.feature');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    features.forEach(feature => {
      const featureTop = feature.getBoundingClientRect().top;
      if (featureTop < windowHeight - 100) {
        feature.style.opacity = 1;
        feature.style.transform = 'translateY(0)';
        feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      } else {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(20px)';
      }
    });
  };

  // Initialize features opacity and transform
  features.forEach(feature => {
    feature.style.opacity = 0;
    feature.style.transform = 'translateY(20px)';
  });

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
