// nilai.js - Grades Page functionality

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Nilai page loaded successfully');
  
  // Add smooth animations to cards
  animateCards();
});

// Animate cards on page load
function animateCards() {
  const statCards = document.querySelectorAll('.stat-card');
  const gradeItems = document.querySelectorAll('.grade-item');
  
  const allCards = [...statCards, ...gradeItems];
  
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

// Filter grades by subject
function filterBySubject(subject) {
  const subjectSections = document.querySelectorAll('.subject-section');
  
  subjectSections.forEach(section => {
    const sectionSubject = section.getAttribute('data-subject');
    
    if (subject === '' || sectionSubject === subject) {
      section.style.display = 'block';
      section.style.animation = 'slideInUp 0.3s ease forwards';
    } else {
      section.style.display = 'none';
    }
  });
}

// Calculate average grade
function calculateAverageGrade() {
  const gradeScores = document.querySelectorAll('.grade-score');
  let total = 0;
  let count = 0;
  
  gradeScores.forEach(score => {
    const value = parseInt(score.textContent);
    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });
  
  return count > 0 ? (total / count).toFixed(1) : 0;
}

// Get highest grade
function getHighestGrade() {
  const gradeScores = document.querySelectorAll('.grade-score');
  let highest = 0;
  
  gradeScores.forEach(score => {
    const value = parseInt(score.textContent);
    if (!isNaN(value) && value > highest) {
      highest = value;
    }
  });
  
  return highest;
}

// Get lowest grade
function getLowestGrade() {
  const gradeScores = document.querySelectorAll('.grade-score');
  let lowest = 100;
  
  gradeScores.forEach(score => {
    const value = parseInt(score.textContent);
    if (!isNaN(value) && value < lowest) {
      lowest = value;
    }
  });
  
  return lowest === 100 ? 0 : lowest;
}

// Click handler for grade items
document.querySelectorAll('.grade-item').forEach(item => {
  item.addEventListener('click', function() {
    const title = this.querySelector('.grade-title').textContent;
    const score = this.querySelector('.grade-score').textContent;
    
    // Show detail - could open a modal or navigate to detail page
    console.log(`Viewing grade: ${title} - Score: ${score}`);
    
    // Optional: Add visual feedback
    this.style.backgroundColor = '#f5f7ff';
    setTimeout(() => {
      this.style.backgroundColor = 'white';
    }, 300);
  });
});

// Add smooth scroll functionality
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Export grades data (optional)
function exportGrades() {
  const average = calculateAverageGrade();
  const highest = getHighestGrade();
  const lowest = getLowestGrade();
  
  console.log(`Grade Statistics:
    Average: ${average}
    Highest: ${highest}
    Lowest: ${lowest}
  `);
}

// Log page initialization
console.log('Nilai page initialized successfully');