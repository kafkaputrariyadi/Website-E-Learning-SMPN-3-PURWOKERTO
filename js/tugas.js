// tugas.js - Task submission with modal functionality

// Global variables
let currentTaskId = null;

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Tugas page loaded successfully");

  // Add smooth animations to cards
  animateCards();

  // Setup file input listener
  setupFileInputListener();

  // Close modal when clicking outside
  setupModalClickListener();
});

// Animate cards on page load
function animateCards() {
  const taskCards = document.querySelectorAll(".task-card");
  const gradeCards = document.querySelectorAll(".grade-card");

  const allCards = [...taskCards, ...gradeCards];

  allCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.animation = `slideInUp 0.5s ease forwards`;
    card.style.animationDelay = `${index * 0.08}s`;
  });
}

// Add animation styles
const style = document.createElement("style");
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

// Open task modal
function openTaskDetail(taskId) {
  currentTaskId = taskId;
  console.log("Opening task submission modal for:", taskId);

  // Show modal
  showModal();
}

// Show modal
function showModal() {
  const modal = document.getElementById("taskModal");
  if (modal) {
    modal.classList.add("show");
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  }
}

// Close modal
function closeModal() {
  const modal = document.getElementById("taskModal");
  if (modal) {
    modal.classList.remove("show");
    // Restore body scroll
    document.body.style.overflow = "auto";
    // Reset form
    resetForm();
  }
}

// Reset form to initial state
function resetForm() {
  const form = document.getElementById("taskSubmissionForm");
  if (form) {
    form.reset();
    const fileInputName = document.querySelector(".file-input-name");
    if (fileInputName) {
      fileInputName.textContent = "Belum ada file dipilih";
    }
  }
}

// Setup file input listener
function setupFileInputListener() {
  const fileInput = document.getElementById("taskFile");
  if (fileInput) {
    fileInput.addEventListener("change", function (e) {
      const fileName = this.files[0]?.name || "Belum ada file dipilih";
      const fileInputName = document.querySelector(".file-input-name");
      if (fileInputName) {
        fileInputName.textContent = fileName;
      }
    });

    // Make the "Pilih File" label open the file picker when clicked
    const fileInputLabel = document.querySelector(".file-input-label");
    const fileInputWrapper = document.querySelector(".file-input-wrapper");
    if (fileInputLabel) {
      fileInputLabel.style.cursor = "pointer";
      fileInputLabel.addEventListener("click", function () {
        fileInput.click();
      });
    }

    // Also support clicking anywhere on the wrapper to choose a file
    if (fileInputWrapper) {
      fileInputWrapper.style.cursor = "pointer";
      fileInputWrapper.addEventListener("click", function (e) {
        // avoid triggering when clicking the actual input element
        if (e.target === fileInput) return;
        fileInput.click();
      });
    }
  }
}

// Setup modal click listener - close when clicking outside
function setupModalClickListener() {
  const modal = document.getElementById("taskModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal();
      }
    });
  }
}

// Handle task submission
function handleTaskSubmission(event) {
  event.preventDefault();

  const taskTitle = document.getElementById("taskTitle").value;
  const taskFile = document.getElementById("taskFile").files[0];
  const taskNotes = document.getElementById("taskNotes").value;

  // Validation
  if (!taskTitle.trim()) {
    alert("Nama tugas tidak boleh kosong!");
    return;
  }

  if (!taskFile) {
    alert("Silakan pilih file tugas!");
    return;
  }

  // Validate file size (max 10MB)
  const maxSize = 10 * 1024 * 1024; // 10MB
  if (taskFile.size > maxSize) {
    alert("Ukuran file tidak boleh lebih dari 10MB!");
    return;
  }

  // Create FormData for file upload
  const formData = new FormData();
  formData.append("taskId", currentTaskId);
  formData.append("taskTitle", taskTitle);
  formData.append("taskFile", taskFile);
  formData.append("taskNotes", taskNotes);

  // Simulate file upload (in production, send to server)
  console.log("Submitting task:", {
    taskId: currentTaskId,
    title: taskTitle,
    fileName: taskFile.name,
    fileSize: taskFile.size,
    notes: taskNotes,
  });

  // Show success message
  showSuccessMessage("Tugas berhasil dikirimkan!");

  // Close modal after short delay
  setTimeout(() => {
    closeModal();
  }, 1500);

  // In production, you would send to server like this:
  /*
  fetch('/api/submit-task', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      showSuccessMessage('Tugas berhasil dikirimkan!');
      setTimeout(() => {
        closeModal();
        // Refresh page or update task status
        location.reload();
      }, 1500);
    } else {
      alert('Error: ' + data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Terjadi kesalahan saat mengirim tugas!');
  });
  */
}

// Show success message
function showSuccessMessage(message) {
  // Create success alert
  const alert = document.createElement("div");
  alert.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #4caf50;
    color: white;
    padding: 16px 24px;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 2000;
    animation: slideInRight 0.3s ease;
  `;
  alert.textContent = message;
  document.body.appendChild(alert);

  // Remove after 3 seconds
  setTimeout(() => {
    alert.remove();
  }, 3000);
}

// Add slide-in-right animation
const styleRight = document.createElement("style");
styleRight.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(styleRight);

// Smooth scroll functionality
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Add search functionality for tasks
function searchTasks(query) {
  const taskCards = document.querySelectorAll(".task-card");

  taskCards.forEach((card) => {
    const title = card.querySelector(".task-title").textContent.toLowerCase();
    const subject = card
      .querySelector(".task-subject")
      .textContent.toLowerCase();

    if (
      title.includes(query.toLowerCase()) ||
      subject.includes(query.toLowerCase())
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// Log page view
console.log("Tugas page initialized successfully");
