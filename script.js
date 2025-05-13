// 
// Event Handling
document.getElementById('clickBtn').addEventListener('click', function() {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
});

document.getElementById('hoverZone').addEventListener('mouseover', function() {
    this.style.border = '3px solid #4CAF50';
});

document.addEventListener('keydown', (e) => {
    document.getElementById('keyDisplay').textContent = `Pressed: ${e.key}`;
});

// Secret double-click
document.getElementById('secretMessage').addEventListener('dblclick', function() {
    this.classList.remove('hidden');
});

// Image Gallery
const images = Array.from({length: 5}, (_, i) => `https://picsum.photos/400/300?random=${i+1}`);
let currentImage = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    updateGallery();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateGallery();
});

function updateGallery() {
    document.querySelector('.slideshow img').src = images[currentImage];
}

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});

// Form Validation
const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    // Add validation logic here
}
