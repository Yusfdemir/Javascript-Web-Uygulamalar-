

class palet {
    constructor(p1,p2){
        this.p1=p1;
        this.p2=p2;
        this.wd = document.body.offsetWidth/p1;
        this.hg = document.body.offsetHeight/p2;
        this.starter();
    }
    randomColor(){
        return `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
    }
    colors(){
        document.querySelectorAll(".item").forEach(element => {
            var rnd=this.randomColor();
            element.style.backgroundColor=rnd;
            element.textContent=rnd;
        });

    }

    copy(item){
        navigator.clipboard.writeText(item.textContent.trim());
        swal("İşlem Tamamlandı", `Kopyalanan Renk:${item.textContent.trim()}`, "success");
        setTimeout(() => {
            document.querySelectorAll(".swal-button").forEach(element => {
                element.click();
            });
        }, 1500);
    }

    starter(){
        for (let i = 0; i < this.p1*this.p2; i++) {
            this.wd = document.body.offsetWidth/this.p1;
            this.hg = document.body.offsetHeight/this.p2;
            var divDom=document.createElement("div");
            divDom.classList.add("item")
            divDom.setAttribute("style",`width:${this.wd}px;height:${this.hg}px;`);
            document.body.appendChild(divDom)
            
        }
        document.querySelectorAll(".item").forEach(el => {
            el.onclick=()=>{
                this.copy(el);
            }
        });
        this.crone();
    }


    crone(){
        this.colors();
        setInterval(() => {
            this.colors();
        }, 1500);
    }
}


const plt=new palet(5,5);