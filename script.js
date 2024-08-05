document.getElementById("generate").addEventListener("click", function () {
  const qrCodeContainer = document.getElementById("qrcode");
  qrCodeContainer.innerHTML = ""; // Clear any existing QR code

  const text = document.getElementById("text").value;
  if (text) {
    const qrCode = new QRCode(qrCodeContainer, {
      text: text,
      width: 256,
      height: 256,
    });

    // Wait for the QR code to be generated
    setTimeout(() => {
      const qrCanvas = qrCodeContainer.querySelector("canvas");
      if (qrCanvas) {
        const dataUrl = qrCanvas.toDataURL("image/png");
        const downloadLink = document.getElementById("download");
        downloadLink.href = dataUrl;
        downloadLink.download = "qrcode.png";
        downloadLink.style.display = "inline-block";
      }
    }, 500); // Adjust the timeout as necessary
  } else {
    alert("Please enter text or URL to generate QR code.");
  }
});
