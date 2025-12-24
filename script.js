
const display = document.querySelector(".hasil")
display.textContent = 0;



let angka = "";
let angka1 = "";
let angka2 = "";
let operator = "";

// =================================================
//              EVENT PER KLIK
// ================================================
document.getElementById("btn-9").onclick = () =>{
    angka += "9";
    display.textContent = angka;
}
document.getElementById("btn-8").onclick = () =>{
    angka += "8";
    display.textContent = angka;
}
document.getElementById("btn-7").onclick = () =>{
    angka += "7";
    display.textContent = angka;
}
document.getElementById("btn-6").onclick = () =>{
    angka += "6";
    display.textContent = angka;
}
document.getElementById("btn-5").onclick = () =>{
    angka += "5";
    display.textContent = angka;
}
document.getElementById("btn-4").onclick = () =>{
    angka += "4";
    display.textContent = angka;
}
document.getElementById("btn-3").onclick = () =>{
    angka += "3";
    display.textContent = angka;
}
document.getElementById("btn-2").onclick = () =>{
    angka += "2";
    display.textContent = angka;
}
document.getElementById("btn-1").onclick = () =>{
    angka += "1";
    display.textContent = angka;
}

// =================================================
//              EVEN TANDA OPERATOR
// =================================================
document.getElementById("btn-tambah").onclick = () => {
    angka1 = display.textContent;
    operator = "+";
    angka = "";
    display.textContent="";
}
document.getElementById("btn-kurang").onclick = () => {
    angka1 = display.textContent;
    operator = "-";
    angka = "";
    display.textContent="";
}
document.getElementById("btn-kali").onclick = () => {
    angka1 = display.textContent;
    operator = "*";
    angka = "";
    display.textContent="";
}

document.getElementById("btn-hasil").onclick = ()=>{
    angka2 = display.textContent;
    let a = parseFloat(angka1);  
    let b = parseFloat(angka2);  
    let hasil = 0;
    if (operator === '+'){
        hasil = a + b;
    }else if (operator === "-"){
        hasil = a - b;
    }else if (operator === "*"){
        hasil = a * b;
    }

    display.textContent = hasil;


    angka = "";
    angka1 = "";
    angka2 = "";
    operator = "";

}
 q