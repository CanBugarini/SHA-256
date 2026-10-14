// Script para Tandil Tech Week Rediseño Hackathon

// Mobile menu toggle (para futuras implementaciones)
const navLinks = document.querySelector('.nav-links');
const btnInscribirse = document.querySelector('.btn-inscribirse');

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.styleopacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar secciones para animación
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Formulario de inscripción simple
const formInscripcion = document.querySelector('.inscripcion-form');
if (formInscripcion) {
  formInscripcion.addEventListener('submit', function(e) {
    const inputs = this.querySelectorAll('input, select');
    let valido = true;
    
    inputs.forEach(input => {
      if (!input.value.trim() && input.type !== 'select-one') {
        valido = false;
        input.style.border = '1px solid var(--error)';
      } else {
        input.style.border = 'none';
      }
    });
    
    if (!valido) {
      e.preventDefault();
      alert('Por favor completá todos los campos obligatorios.');
    }
  });
}

// Contador simple para fechas (ejemplo)
document.addEventListener('DOMContentLoaded', () => {
  const ahora = new Date();
  const fechaEvento = new Date('2024-11-15');
  const diffTime = fechaEvento - ahora;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays > 0) {
    console.log(`Faltan ${diffDays} días para el evento`);
  }
});