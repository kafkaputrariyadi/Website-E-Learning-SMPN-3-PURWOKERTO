// Fungsi Form dan Upload untuk upload_tugas.html
function handleFileSelect(file, uploadArea) {
  uploadArea.innerHTML = `
                <div class="upload-icon">✅</div>
                <p class="upload-text">${file.name}</p>
                <p class="upload-subtext">File berhasil dipilih</p>
            `;
}

function setupUploadArea() {
  const uploadArea = document.getElementById("uploadArea");
  const fileInput = document.getElementById("fileInput");

  if (!uploadArea || !fileInput) return;

  uploadArea.addEventListener("click", () => fileInput.click());

  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = "#4dd4d8";
    uploadArea.style.background = "#f0feff";
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.style.borderColor = "#ddd";
    uploadArea.style.background = "#fafafa";
  });

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = "#ddd";
    uploadArea.style.background = "#fafafa";

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0], uploadArea);
    }
  });

  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleFileSelect(e.target.files[0], uploadArea);
    }
  });
}
window.addEventListener("load", setupUploadArea);
