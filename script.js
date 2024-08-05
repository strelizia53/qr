document.getElementById("generate").addEventListener("click", function () {
  const qrCodeContainer = document.getElementById("qrcode");
  qrCodeContainer.innerHTML = ""; // Clear any existing QR code

  const text = document.getElementById("text").value;
  if (text) {
    new QRCode(qrCodeContainer, {
      text: text,
      width: 256,
      height: 256,
    });
  } else {
    alert("Please enter text or URL to generate QR code.");
  }
});
