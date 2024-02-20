let returnvalue = document.getElementById("return");

function qrcodegen(){
    qrimage.src= " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "+returnvalue.value;
}