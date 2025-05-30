<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Profil SMK Negeri Contoh</title>
  <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="vendor/aos/aos.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">SMK Negeri Contoh</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#home">Beranda</a></li>
          <li class="nav-item"><a class="nav-link" href="#profil">Profil</a></li>
          <li class="nav-item"><a class="nav-link" href="#program">Program Keahlian</a></li>
          <li class="nav-item"><a class="nav-link" href="#galeri">Galeri</a></li>
          <li class="nav-item"><a class="nav-link" href="#kontak">Kontak</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header id="home" class="hero-section d-flex align-items-center">
    <div class="container text-center text-white" data-aos="fade-up">
      <h1>Selamat Datang di SMK Negeri Contoh</h1>
      <p>Tempat mencetak generasi unggul dan siap kerja</p>
    </div>
  </header>

  <!-- Profil Sekolah -->
  <section id="profil" class="py-5">
    <div class="container" data-aos="fade-right">
      <h2 class="text-center">Profil Sekolah</h2>
      <p>SMK Negeri Contoh berdiri sejak tahun 1995 dan memiliki 5 program keahlian unggulan...</p>
    </div>
  </section>

  <!-- Program Keahlian -->
  <section id="program" class="bg-light py-5">
    <div class="container" data-aos="zoom-in">
      <h2 class="text-center mb-4">Program Keahlian</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="img/rpl.jpg" class="card-img-top" alt="RPL">
            <div class="card-body">
              <h5 class="card-title">Rekayasa Perangkat Lunak</h5>
              <p class="card-text">Belajar pemrograman, web development, dan sistem informasi.</p>
            </div>
          </div>
        </div>
        <!-- Tambahkan program lain -->
      </div>
    </div>
  </section>

  <!-- Galeri -->
  <section id="galeri" class="py-5">
    <div class="container" data-aos="fade-up">
      <h2 class="text-center mb-4">Galeri Sekolah</h2>
      <div class="row g-3">
        <div class="col-md-3">
          <img src="img/galeri1.jpg" class="img-fluid rounded shadow" alt="Galeri">
        </div>
        <!-- Tambahkan gambar lain -->
      </div>
    </div>
  </section>

  <!-- Kontak -->
  <section id="kontak" class="py-5 bg-light">
    <div class="container" data-aos="fade-left">
      <h2 class="text-center mb-4">Hubungi Kami</h2>
      <form id="formKontak">
        <div class="mb-3">
          <label for="nama" class="form-label">Nama</label>
          <input type="text" class="form-control" id="nama" required>
        </div>
        <div class="mb-3">
          <label for="pesan" class="form-label">Pesan</label>
          <textarea class="form-control" id="pesan" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Kirim</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2025 SMK Negeri Contoh. All Rights Reserved.</p>
  </footer>

  <script src="vendor/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="vendor/aos/aos.js"></script>
  <script src="js/script.js"></script>
  <script>
    AOS.init();
  </script>
</body>
</html>
