// tugas.js - Simplified version

// Global variables
let currentTaskId = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Tugas page loaded successfully');
  
  // Add smooth animations to cards
  animateCards();
});

// Animate cards on page load
function animateCards() {
  const taskCards = document.querySelectorAll('.task-card');
  const gradeCards = document.querySelectorAll('.grade-card');
  
  const allCards = [...taskCards, ...gradeCards];
  
  allCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `slideInUp 0.5s ease forwards`;
    card.style.animationDelay = `${index * 0.08}s`;
  });
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Open task detail
function openTaskDetail(taskId) {
  currentTaskId = taskId;
  console.log('Opening task detail:', taskId);
  
  // Show confirmation dialog or redirect
  alert('Tugas akan dikirimkan untuk: ' + taskId);
  
  // You can also redirect to a task submission page
  // window.location.href = 'submit-task.html?taskId=' + taskId;
}

// Smooth scroll functionality
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add search functionality for tasks
function searchTasks(query) {
  const taskCards = document.querySelectorAll('.task-card');
  
  taskCards.forEach(card => {
    const title = card.querySelector('.task-title').textContent.toLowerCase();
    const subject = card.querySelector('.task-subject').textContent.toLowerCase();
    
    if (title.includes(query.toLowerCase()) || subject.includes(query.toLowerCase())) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Log page view
console.log('Tugas page initialized successfully');
