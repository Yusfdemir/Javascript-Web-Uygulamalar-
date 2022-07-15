var interval;

var zfc = () =>{
    interval=setInterval(() => {
        document.querySelector(".sayac").textContent=Number(document.querySelector(".sayac").textContent)+1
    }, 1000);
}

var statu=false;
document.querySelector(".go").onclick=()=>{
    var val=Number(document.querySelector(".sayac").textContent);

    if (val==0) {
        document.querySelector(".go").textContent="Stop";
        zfc();
        statu=true;
    }
    else if(val!=0){
        if (!statu) {
            clearInterval(interval)
            zfc();
            document.querySelector(".go").textContent="Stop";
            statu=true;
        }
        else{
            clearInterval(interval)
            document.querySelector(".go").textContent="Continue";
            statu=false;
        }
        
    }
}

document.querySelector(".reset").onclick=()=>{
    clearInterval(interval);
    document.querySelector(".sayac").textContent=0;
    document.querySelector(".go").textContent="Start";

}
