/* ==========================================
   1. MOBILE MENU
   ========================================== */
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Open or close the sidebar when the menu button is clicked
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close the sidebar after clicking a link (for mobile users)
const navLinks = document.querySelectorAll('#sidebar a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});


/* ==========================================
   2. TYPING EFFECT (Home section)
   ========================================== */
const typingElement = document.getElementById('typing-word');
const words = ['Student', 'Writer', 'Aspiring Developer'];

let wordIndex = 0;   
let letterIndex = 0; 
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    letterIndex--;   
  } else {
    letterIndex++;   
  }

  // Show the part of the word we have so far
  typingElement.textContent = currentWord.substring(0, letterIndex);

  let delay = isDeleting ? 60 : 120;

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    delay = 1500;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();


/* ==========================================
   3. FOOTER YEAR (updates by itself)
   ========================================== */
document.getElementById('year').textContent = new Date().getFullYear();


/* ==========================================
   4. CERTIFICATE VIEWER (pop-up)
   ========================================== */
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerClose = document.getElementById('viewer-close');
const certificateCards = document.querySelectorAll('.certificate-card');

// Open the pop-up when a certificate card is clicked
certificateCards.forEach(card => {
  card.addEventListener('click', () => {
    viewerImg.src = card.dataset.full;   
    viewer.classList.add('open');
  });
});

function closeViewer() {
  viewer.classList.remove('open');
}
viewerClose.addEventListener('click', closeViewer);

viewer.addEventListener('click', (event) => {
  if (event.target === viewer) {
    closeViewer();
  }
});

// Close when pressing the Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeViewer();
  }
});