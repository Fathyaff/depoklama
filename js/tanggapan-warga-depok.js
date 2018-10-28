function afterSubmitTanggapan() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("umur").value = "";
  document.getElementById("pekerjaan").value = "";
  document.getElementById("message").value = "";

  alert("Terima kasih atas tanggapan yang diberikan!");
}
