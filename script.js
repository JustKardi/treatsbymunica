// Vanta.js background
VANTA.WAVES({
  el: "#landing",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x536498,
  shininess: 50.00,
  waveHeight: 20.00,
  waveSpeed: 0.75,
  zoom: 0.90
});

// Scroll fade-in
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Carousel logic
const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dots span");
let currentSlide = 0;
const totalSlides = dots.length;

// Auto play
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}, 5000);

// Dot click
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentSlide = parseInt(dot.dataset.index);
    updateCarousel();
  });
});

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

// Initialize first dot active
updateCarousel();
