let girilensayı
let btnoyna=document.getElementById("btnoyna")
let btnsıfırla=document.getElementById("sıfırla")
let tahmin 
let hak=10
let yazdır=document.getElementById("ekran")
function tahmın(){
  tahmin=(Math.floor(Math.random()*100))
  console.log(tahmin)
}
    btnoyna.addEventListener("click",()=>{
        girilensayı=document.getElementById("girilensayi").value
        console.log(girilensayı) 
        if(girilensayı<tahmin){
        yazdır.innerHTML=""
        yazdır.innerHTML="Daha Büyük sayı giriniz"
        }
        else if(girilensayı>tahmin){
        yazdır.innerHTML=""
        yazdır.innerHTML="daha küçük sayı giriniz"
        }
        else if(girilensayı=tahmin){
        yazdır.innerHTML=""
        yazdır.innerHTML="tebrikler "+ tahmin +"doğru tahmin"
        }
        })
        btnsıfırla.addEventListener("click",()=>{
            girilensayı=document.getElementById("girilensayi").innerHTML=""
            document.getElementById("girilensayi").value=""
            document.getElementById=("girilensayi").placeholder=""
            yazdır.innerHTML=""
        })    
       
