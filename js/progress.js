// progress.js - render subject progress based on ?subject= query
(function () {
  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  const subjectKey = getQueryParam('subject') || 'matematika';

  // sample dataset per subject (this would normally come from API)
  const sampleData = {
    matematika: {
      title: 'Matematika',
      desc: 'Analisis pola dan hubungan dalam situasi matematis.',
      teacher: 'Pak Budi Santoso',
      avg: 86.4,
      completed: 7,
      total: 9,
      percent: 78,
      assignments: [
        { id: 't1', title: 'Tugas Minggu ke-1', date: '14 Mei 2025', status: 'completed', score: 85, progress: 100 },
        { id: 't2', title: 'Tugas Minggu ke-2', date: '21 Mei 2025', status: 'completed', score: 90, progress: 100 },
        { id: 'k1', title: 'Kuis Bab 3', date: '25 Mei 2025', status: 'completed', score: 88, progress: 100 },
        { id: 't3', title: 'Tugas Minggu ke-3', date: '04 Jun 2025', status: 'pending', score: null, progress: 40 },
        { id: 'u1', title: 'Ulangan Harian', date: '10 Jun 2025', status: 'late', score: 60, progress: 60 },
        { id: 't4', title: 'Tugas Minggu ke-4', date: '17 Jun 2025', status: 'pending', score: null, progress: 0 },
        { id: 'k2', title: 'Kuis Bab 4', date: '22 Jun 2025', status: 'completed', score: 92, progress: 100 },
        { id: 't5', title: 'Tugas Proyek', date: '30 Jun 2025', status: 'pending', score: null, progress: 10 },
        { id: 'u2', title: 'Ulangan Akhir', date: '05 Jul 2025', status: 'pending', score: null, progress: 0 },
      ]
    },
    ipa: {
      title: 'Ilmu Pengetahuan Alam',
      desc: 'Mempelajari fenomena alam dan eksperimen sederhana.',
      teacher: 'Bu Sari',
      avg: 82.3,
      completed: 4,
      total: 7,
      percent: 57,
      assignments: [
        { id: 't1', title: 'Tugas Minggu ke - 1', date: '18 Mei 2025', status: 'completed', score: 92, progress: 100 },
        { id: 'u1', title: 'UTS', date: '28 Mei 2025', status: 'completed', score: 80, progress: 100 },
        { id: 't2', title: 'Tugas Minggu ke - 2', date: '05 Jun 2025', status: 'pending', score: null, progress: 10 }
      ]
    },
    'ilmu-pengetahuan-alam': null,
    'bahasa-inggris': {
      title: 'Bahasa Inggris',
      desc: 'Pengembangan kemampuan bahasa lisan dan tulisan.',
      teacher: 'Bu Dewi',
      avg: 80.1,
      completed: 5,
      total: 8,
      percent: 62,
      assignments: [
        { id: 'b1', title: 'Tugas Reading', date: '20 Mei 2025', status: 'completed', score: 78, progress: 100 },
        { id: 'b2', title: 'Speaking Test', date: '27 Mei 2025', status: 'completed', score: 82, progress: 100 },
        { id: 'b3', title: 'Listening Practice', date: '05 Jun 2025', status: 'pending', score: null, progress: 20 }
      ]
    },
    'bahasa-indonesia': {
      title: 'Bahasa Indonesia',
      desc: 'Apresiasi teks dan keterampilan menulis.',
      teacher: 'Pak Agus',
      avg: 88.2,
      completed: 6,
      total: 8,
      percent: 75,
      assignments: [
        { id: 'bi1', title: 'Analisis Puisi', date: '22 Mei 2025', status: 'completed', score: 89, progress: 100 },
        { id: 'bi2', title: 'Esai Pendek', date: '02 Jun 2025', status: 'pending', score: null, progress: 0 }
      ]
    },
    pjok: {
      title: 'Pendidikan Jasmani dan Olahraga',
      desc: 'Latihan fisik dan evaluasi kebugaran.',
      teacher: 'Pak Rudi',
      avg: 92.5,
      completed: 6,
      total: 6,
      percent: 100,
      assignments: [
        { id: 'pj1', title: 'Tes Kebugaran', date: '10 Mei 2025', status: 'completed', score: 95, progress: 100 }
      ]
    },
    informatika: {
      title: 'Informatika',
      desc: 'Dasar-dasar pemrograman dan computational thinking.',
      teacher: 'Bu Lestari',
      avg: 85.0,
      completed: 4,
      total: 6,
      percent: 66,
      assignments: [
        { id: 'inf1', title: 'Latihan Koding 1', date: '12 Mei 2025', status: 'completed', score: 88, progress: 100 },
        { id: 'inf2', title: 'Project Mini', date: '25 Jun 2025', status: 'pending', score: null, progress: 30 }
      ]
    },
    'ilmu-pengetahuan-sosial': {
      title: 'Ilmu Pengetahuan Sosial',
      desc: 'Kajian aspek sosial, ekonomi, dan sejarah.',
      teacher: 'Pak Dwi',
      avg: 78.5,
      completed: 3,
      total: 7,
      percent: 42,
      assignments: [
        { id: 'ips1', title: 'Esai Sejarah', date: '18 Mei 2025', status: 'completed', score: 78, progress: 100 },
        { id: 'ips2', title: 'Tugas Kelompok', date: '01 Jun 2025', status: 'late', score: 60, progress: 80 }
      ]
    },
    'seni-budaya': {
      title: 'Pendidikan Seni dan Budaya',
      desc: 'Praktik dan apresiasi seni budaya.',
      teacher: 'Bu Yuni',
      avg: 84.0,
      completed: 5,
      total: 7,
      percent: 71,
      assignments: [
        { id: 's1', title: 'Praktik Melukis', date: '15 Mei 2025', status: 'completed', score: 86, progress: 100 },
        { id: 's2', title: 'Tugas Karya', date: '28 Jun 2025', status: 'pending', score: null, progress: 0 }
      ]
    },
    'bahasa-jawa': {
      title: 'Bahasa Jawa',
      desc: 'Pelestarian bahasa dan budaya Jawa.',
      teacher: 'Bu Ani',
      avg: 87.0,
      completed: 4,
      total: 6,
      percent: 66,
      assignments: [
        { id: 'j1', title: 'Tugas Kosa Kata', date: '14 Mei 2025', status: 'completed', score: 90, progress: 100 },
        { id: 'j2', title: 'Presentasi', date: '03 Jun 2025', status: 'pending', score: null, progress: 20 }
      ]
    },
    ppkn: {
      title: 'Pendidikan Pancasila dan Kewarganegaraan',
      desc: 'Pembentukan karakter dan nilai kebangsaan.',
      teacher: 'Pak Hadi',
      avg: 81.3,
      completed: 4,
      total: 6,
      percent: 66,
      assignments: [
        { id: 'p1', title: 'Refleksi Nilai', date: '20 Mei 2025', status: 'completed', score: 80, progress: 100 },
        { id: 'p2', title: 'Tugas Diskusi', date: '05 Jun 2025', status: 'pending', score: null, progress: 0 }
      ]
    },
    'pendidikan-agama': {
      title: 'Pendidikan Agama dan Budi Pekerti',
      desc: 'Pembentukan karakter dan nilai-nilai agama.',
      teacher: 'Bu Siti',
      avg: 90.2,
      completed: 5,
      total: 5,
      percent: 100,
      assignments: [
        { id: 'ag1', title: 'Refleksi Rohani', date: '18 Mei 2025', status: 'completed', score: 92, progress: 100 }
      ]
    }
  };

  // support alias key for long-form yang mungkin dikirim dari dashboard
  if(subjectKey === 'ilmu-pengetahuan-alam' && !sampleData['ilmu-pengetahuan-alam']){
    sampleData['ilmu-pengetahuan-alam'] = sampleData['ipa'];
  }
  const data = sampleData[subjectKey] || sampleData['matematika'];

  // initialize tab counts and handlers
  function updateCounts(){
    const counts = { all: data.assignments.length, completed:0, pending:0, late:0 };
    data.assignments.forEach(a=>{
      if(a.status==='completed') counts.completed++;
      else if(a.status==='pending') counts.pending++;
      else if(a.status==='late') counts.late++;
    });
    document.getElementById('count-all').textContent = counts.all;
    document.getElementById('count-completed').textContent = counts.completed;
    document.getElementById('count-pending').textContent = counts.pending;
    document.getElementById('count-late').textContent = counts.late;
  }

  updateCounts();

  // wire tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab=>{
    tab.addEventListener('click', function(){
      tabs.forEach(t=>t.classList.remove('active'));
      this.classList.add('active');
      renderItems(this.getAttribute('data-filter'));
    });
  });

  document.getElementById('subjectTitle').textContent = data.title;
  document.getElementById('subjectDesc').textContent = data.desc;
  document.getElementById('teacherName').textContent = data.teacher;
  document.getElementById('avgScore').textContent = data.avg;
  document.getElementById('completedCount').textContent = data.completed + ' / ' + data.total;

  // update circular progress
  const percent = data.percent || 0;
  const circle = document.getElementById('circleBar');
  const percentText = document.getElementById('percentText');
  // stroke-dasharray: percentage of 100
  circle.setAttribute('stroke-dasharray', percent + ', 100');
  percentText.textContent = percent + '%';

  // render assignments
  const list = document.getElementById('assignmentsList');
  function statusBadge(status){
    if(status==='completed') return '<span class="status completed">Selesai</span>';
    if(status==='pending') return '<span class="status pending">Belum dikerjakan</span>';
    if(status==='late') return '<span class="status late">Terlambat</span>';
    return '<span class="status">-</span>';
  }

  function renderItems(filter){
    list.innerHTML = '';
    const items = data.assignments.filter((it)=>{
      if(filter==='all') return true;
      return it.status === filter;
    });
    if(items.length===0){
      list.innerHTML = '<div style="padding:16px;color:#6b7280">Tidak ada item.</div>';
      return;
    }

    // sort so that pending and late appear at bottom/top as appropriate
    items.sort((a,b)=>{
      const order = { completed: 0, pending: 1, late: 2 };
      return (order[a.status]||3) - (order[b.status]||3);
    });
    items.forEach(item=>{
      const el = document.createElement('div');
      el.className = 'assignment-item';
      el.innerHTML = `
        <div class="assignment-left">
          <div>
            <div class="assignment-title">${item.title}</div>
            <div class="assignment-meta">${item.date} • ${item.score!==null?('Nilai: '+item.score):'Belum dikerjakan'}</div>
            <div class="progress-bar"><div class="progress-fill" style="width:${item.progress}%"></div></div>
          </div>
        </div>
        <div>
          ${statusBadge(item.status)}
        </div>
      `;
      list.appendChild(el);
    });
  }

  // initial render
  renderItems('all');

    // legacy select removed; tabs handle filtering now
})();
