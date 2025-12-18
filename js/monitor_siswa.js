// Data dan Fungsi Monitor Siswa (Diulang di sini)
const studentData = {
  /* ... (salin data studentData dari file asli) ... */
};

function renderStudentTable(kelas, searchTerm = "") {
  const students = studentData[kelas] || [];
  const statusFilter = document.getElementById("statusFilter").value;
  const tbody = document.getElementById("studentTableBody");

  // ... (Kode filter dan render tabel siswa) ...

  let filteredStudents = students;

  if (searchTerm) {
    filteredStudents = filteredStudents.filter((s) =>
      s.name.toLowerCase().includes(searchTerm)
    );
  }

  if (statusFilter !== "all") {
    filteredStudents = filteredStudents.filter(
      (s) => s.status === statusFilter
    );
  }

  const onlineCount = students.filter((s) => s.status === "online").length;
  document.getElementById("siswaOnline").textContent = onlineCount;
  document.getElementById("totalSiswa").textContent = students.length;

  const rows = filteredStudents
    .map(
      (student) => `
        <div class="student-row">
            <div class="td" style="width: 25%;">
                <div class="student-info">
                    <div class="student-avatar" style="background: ${
                      student.color
                    };">
                        ${student.avatar}
                    </div>
                    <div>
                        <div class="student-name">${student.name}</div>
                        <div class="student-id">${student.id}</div>
                    </div>
                </div>
            </div>
            <div class="td" style="width: 12%;">
                <span class="status-badge status-${student.status}">
                    ${student.status === "online" ? "Online" : "Offline"}
                </span>
            </div>
            <div class="td" style="width: 18%;">
                <span class="online-time">${student.lastOnline}</span>
            </div>
            <div class="td" style="width: 18%;">
                <div class="progress-container">
                    <div class="progress-mini">
                        <div class="progress-mini-fill" style="width: ${
                          student.progress
                        }%"></div>
                    </div>
                    <span class="progress-label">${student.progress}%</span>
                </div>
            </div>
            <div class="td" style="width: 12%;">
                <span class="tugas-count">${student.tugas}</span>
            </div>
            <div class="td" style="width: 15%;">
                <div class="action-btns">
                    <button class="action-btn btn-detail">Detail</button>
                    <button class="action-btn btn-nilai">Nilai</button>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  tbody.innerHTML = rows;
}

function initMonitorSiswa() {
  renderStudentTable("7b");

  document.getElementById("kelasFilter").addEventListener("change", (e) => {
    renderStudentTable(e.target.value);
  });

  document.getElementById("refreshBtn").addEventListener("click", () => {
    const kelas = document.getElementById("kelasFilter").value;
    renderStudentTable(kelas);
  });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    const kelas = document.getElementById("kelasFilter").value;
    const searchTerm = e.target.value.toLowerCase();
    renderStudentTable(kelas, searchTerm);
  });

  document.getElementById("statusFilter").addEventListener("change", () => {
    const kelas = document.getElementById("kelasFilter").value;
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    renderStudentTable(kelas, searchTerm);
  });
}
window.addEventListener("load", initMonitorSiswa);
