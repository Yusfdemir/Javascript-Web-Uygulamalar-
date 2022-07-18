

document.querySelector(".generate").onclick=()=>{
    var red=Math.floor(Math.random()*255);
    var green=Math.floor(Math.random()*255);
    var blue=Math.floor(Math.random()*255);
    document.body.style.backgroundColor=`rgb(${red},${green},${blue})`
    document.querySelector(".color-info").textContent=`rgb(${red},${green},${blue})`
}

document.querySelector(".copy").onclick=()=>{
    navigator.clipboard.writeText(document.querySelector(".color-info").textContent);
    swal("Renk Kopyalandı!", `Kopyaladğınız rengin kodu: ${document.querySelector(".color-info").textContent}!`, "success");
}