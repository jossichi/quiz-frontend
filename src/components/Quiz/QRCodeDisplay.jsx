import React from 'react';

function QRCodeDisplay() {
  return (
    <div className='container'>
      <h1>Scan this QR Code to access the application:</h1>
      <img src='http://localhost:5000/qrcode.png' alt='QR Code' />
    </div>
  );
}

export default QRCodeDisplay;
