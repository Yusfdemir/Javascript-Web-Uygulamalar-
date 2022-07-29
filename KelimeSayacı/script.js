

const kelime=()=>{
    var rtn =[];
    var spl=String(document.querySelector(".area").value).replace(/\n/g," ").replace(/  /g," ").trim().split(" ");
    spl.forEach(element => {
        if(element.length>=1 && element!="" && element!=null){
            rtn.push(element);
        }
    });
    return rtn;
}

const paragraf=()=>{
    var rtn=[];
    var spl=String(document.querySelector(".area").value).replace(/ /g," ").trim().split("\n");
    spl.forEach(el => {
        if(el.length>=1 && el!="" && el!=null){
            rtn.push(el);
        }
    });
    return rtn;
}

const cumle=()=>{
    var rtn=[];
    var spl=String(document.querySelector(".area").value).replace(/ /g," ").replace(/[?!]/g,".").trim().split(".")
    spl.forEach(el => {
        if(el.length>=1 && el!="" && el!=null){
            rtn.push(el);
        }
    });
    return rtn;
}


document.querySelector(".area").onkeyup=()=>{
    document.querySelector(".karakter").textContent=document.querySelector(".area").value.length
    document.querySelector(".kelime").textContent=kelime().length;
    document.querySelector(".paragraf").textContent=paragraf().length;
    document.querySelector(".cumle").textContent=cumle().length;
}