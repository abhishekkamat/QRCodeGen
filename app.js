/* JS comes here */
var qr;
(function() {
        qr = new QRious({
        element: document.getElementById('qr-code'),
        foreground:'#464647',
        size: 320,
        value: 'Your Token will be Generated here!'
    });
})();

function generateQRCode() {
    var qrtext = String(uuidv4());
    document.getElementById("qr-result").innerHTML = "QR code for " + qrtext +":";
    alert("Create a QR Code for: "+qrtext);
    qr.set({
        foreground: '#464647',
        size: 320,
        value: qrtext
    });
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
