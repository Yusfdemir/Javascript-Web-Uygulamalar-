const $=(selector)=>{
    return document.querySelector(selector);
}

const months=["Ocak","Subat","Mart","Nisan","Mayıs","Haziran","Temmuz","Agustos","Eylül","Ekim","Kasim","Aralik"]

const rpl= (str)=>{
    return String(str).length>1 ? String(str) : "0"+String(str);
}

const setter = () =>{
    var date=new Date();
    $('.gun .dgr').textContent = rpl(date.getDate());
    $('.ay .dgr').textContent = months[date.getMonth()];
    $('.yil .dgr').textContent = rpl(date.getFullYear());
    $('.saat .dgr').textContent = rpl(date.getHours());
    $('.dakika .dgr').textContent = rpl(date.getMinutes());
    $('.saniye .dgr').textContent = rpl(date.getSeconds());

}

setter();

setInterval(() => {
    setter();
}, 1000);