const qrText = document.getElementById('qr-text'); // input form
const sizes = document.getElementById('sizes'); // option tag
const generateBtn = document.getElementById('generateBtn'); 
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
    
let size = sizes.value;

// QECode generate button 
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmpty();
});

// size button
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmpty();
   
});

//download button
downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if (img !== null) { 
        let ingArtt = img.getAttribute('src');
        downloadBtn.setAttribute('href',ingArtt);
    }else{
        downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`);
    };
});

//function for handel empty text
function isEmpty() {
    qrText.value.length > 0 ? generateQRcode() : alert('Enter Your Text or URL!');
};

// function for generate QECode 
function generateQRcode() {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer,{
        text : qrText.value,
        height: size,
        width : size,
        colorLight: '#fff',
        colorDark: '#000',
    });
};