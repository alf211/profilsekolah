document.getElementById("formKontak").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  if (nama && pesan) {
    alert(`Terima kasih ${nama}, pesan Anda telah terkirim!`);
    this.reset();
  }
});
