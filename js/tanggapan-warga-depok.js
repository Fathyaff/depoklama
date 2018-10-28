function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function afterSubmitTanggapan() {
  await sleep(500);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("umur").value = "";
  document.getElementById("pekerjaan").value = "";
  document.getElementById("message").value = "";

  document.getElementById("tanggapan-berhasil").style.display = "block";
}
