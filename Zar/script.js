const sleep=(ms)=>{
    return new Promise((resolve,reject)=>{
        try{
            setTimeout(()=>{
                resolve()
            },ms);
        }
        catch(err){
            reject(err);
        }
    })
}

class lucky {
    constructor(item,cls,lng){
        this.item=item;
        this.cls=cls;
        this.lng=lng;
    }

    clear(){
        document.querySelectorAll(this.item + ' ' + this.cls).forEach(el =>{
            el.remove()
        });
    }

    lck(){
        return (Math.floor(Math.random()*this.lng)+1);
    
         
    }

    async str(){
        var arr=[0,0,0,0,0,0];
        var sonnum;
        for (let i = 0; i <= 50; i++) {
            var nmr=this.lck()
            sonnum=nmr;
            arr[nmr-1]+=1;
            this.clear();
            this.addded(nmr);
            await sleep(100);
        }
        
        swal("Zar atıldı!", `50 atıştan ${arr[sonnum-1]} tane yani %${Math.round((arr[sonnum-1]/50)*100)} olasılıkla ${sonnum} geldi`, "success");
        
        document.querySelector(".runner").classList.remove("none");
    }

    starter(){
        document.querySelector(".runner").classList.add("none");
        this.str();
    }

    addded(num){
        
       switch (num) {
        case 1:
            document.querySelector(this.item).style.backgroundImage= "url(zar1.png)"
            break;
        case 2:
            document.querySelector(this.item).style.backgroundImage= "url(zar2.png)"
            break;
        case 3:
            document.querySelector(this.item).style.backgroundImage= "url(zar3.png)"
            break;
        case 4:
            document.querySelector(this.item).style.backgroundImage= "url(zar4.png)"
            break;       

        case 5:
            document.querySelector(this.item).style.backgroundImage= "url(zar5.png)"
            break;
        case 6:
            document.querySelector(this.item).style.backgroundImage= "url(zar6.png)"
        break;
       }
    }
}


const zfc=new lucky(".item",".z-item",6);

document.querySelector(".runner").onclick= ()=>{
    zfc.starter()
    document.querySelector(".item").style.border="none"
}