var words="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eum suscipit, voluptatum corporis, ipsa id aliquid voluptatibus nemo tenetur officia, beatae rerum fuga quod voluptatem doloremque. Numquam, corrupti. Modi, at consequatur! Modi non quas nihil eveniet provident vitae excepturi ullam optio illo. Amet unde numquam repellat explicabo quibusdam voluptates nisi perspiciatis voluptatum quas, similique tempore ad? Reprehenderit consequuntur explicabo debitis repellat consectetur voluptatum unde doloremque iste iusto a? Ipsum consectetur aliquid eos deserunt et magnam dolor ratione unde cupiditate enim veritatis architecto asperiores voluptas, aperiam odit eligendi. Suscipit rerum, quae necessitatibus dolores eaque obcaecati neque maiores expedita nostrum aut. Alias!"
words=words.replace(/[?.,!]/gi,"").split(" ");

if(!(localStorage.getItem("memory"))){
localStorage.setItem("memory",JSON.stringify((0)));
}
let maxPoint=JSON.parse(localStorage.getItem("memory"))
document.querySelector(".h-score").innerHTML=JSON.parse(localStorage.getItem('memory'));
document.querySelector(".h-score").style.color="red";

class game{
    constructor(iteration){
        this.iteration=iteration;
        this.arr=[];
        this.inputDOM;
        this.buttonDOM;
        this.buttonCheck;
        this.ulDOM;
        this.answers=[];
    }

    createword(){
        var i=1;
        var int= setInterval(() => {
                if(i>this.iteration){
                    clearInterval(int);
                    this.DeleteWords();
                    this.CheckWords();
                }
                this.randomWord(i)
                i++;
        }, 2000);
    }

    randomWord(iter){
        var divDom=document.createElement("div");
        divDom.classList.add("item");
        for (let i = 0; i < iter; i++) {
            var word=words[Math.floor(Math.random()*100)]
            this.arr.push(word);
            divDom.innerHTML+=`<span style="margin-left:10px;">${word} </span>` 
                  
        }
        document.querySelector(".container").appendChild(divDom);
    }

    DeleteWords(){
        document.querySelector(".container").classList.add("none");
    }

    CheckWords(){
        this.CreateInput()
        this.AddLi();
        this.CheckAnswers();

    }

    CreateInput(){
        this.inputDOM=document.createElement("input");
        this.inputDOM.setAttribute("type","text");
        this.inputDOM.setAttribute("placeholder","Lütfen Hatırladığınız kelimeleri girin");
        this.inputDOM.classList.add("inp")
        document.querySelector(".check").appendChild(this.inputDOM)
        this.buttonDOM=document.createElement("button");
        this.buttonDOM.textContent="Ekle";
        this.buttonDOM.classList.add("btn");
        document.querySelector(".check").appendChild(this.buttonDOM)
        this.buttonCheck=document.createElement("button");
        this.buttonCheck.textContent="Kontrol Et";
        this.buttonCheck.classList.add("btn");
        document.querySelector(".check").appendChild(this.buttonCheck)
        this.ulDOM=document.createElement("ul");
        document.querySelector(".answer").appendChild(this.ulDOM); 
    }

    AddLi(){ 
        this.buttonDOM.onclick=()=>{
           if(this.inputDOM.value!="" && this.answers.length <this.iteration*(this.iteration+1)/2){
                this.answers.push(this.inputDOM.value);
                var liDom=document.createElement("li");
                liDom.textContent=this.inputDOM.value;
                this.ulDOM.appendChild(liDom)
                this.inputDOM.value="";
            }
            else{
                swal("Hatalı Giriş", "Boş string girdiniz veya kelime limitinizi tükettiniz", "success");
            }
        }    
    }

    CheckAnswers(){
        var score=0;
        this.buttonCheck.onclick=()=>{
            if(this.answers.length==0){
                swal("Hata", "Kontrol etmeden önce input kısmına en az 1 kelime eklemelisiniz", "success");
            }
            else{
                for (let i = 0; i < this.answers.length; i++) {
                    if(this.arr.includes(this.answers[i])){
                        score+=5;
                        this.arr.splice(this.arr.indexOf(this.answers[i]),1);
                    }   
                }
                if(score>maxPoint){
                    localStorage.setItem('memory',JSON.stringify(score));
                    maxPoint=JSON.parse(localStorage.getItem("memory"))
                }

                document.querySelector(".a-score").style.color="red";
                document.querySelector(".a-score").textContent=String(score);
                document.querySelector(".h-score").innerHTML=JSON.parse(localStorage.getItem('memory'));
                var wordDiv=document.createElement("div");
                wordDiv.style.marginLeft="50px"
                wordDiv.innerHTML=`<br>Karşınıza çıka kelimeler şunlardı:<br> `;
                this.arr.forEach(item=>{
                    wordDiv.innerHTML+=`${item}<br>`;
                })
                document.querySelector(".words").appendChild(wordDiv);
                
            }
        }
    }
}
swal("Hafıza Oyununa Hoşgeldiniz","Bu oyundaki amacımız ekranda kıs süreli olarak gösterilen keimelerden olduğunca fazla aklımızda tutabilmektir aklınızda tutabildiğiniz tüm kelimeleri input kısmına yazıp ekle butonu ile eklemenizi daha sonra kontrol et butonu ile kontrol etmeniz gerekmektedir\n Oyuna Başlamak için OK tuşuna basınız")
.then((value) => {
    var startGame=new game(5);
    startGame.createword();
})




