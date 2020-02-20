let number = Number(prompt("nhap 1 so"));

if(number > 8){
    console.log("lon hon 8");
}

if(number < 8){
    console.log("nho hon 8");
}

if(number === 8){
    console.log("bang 8");
}

let year = parseInt(prompt("nhap nam"));
if ((year % 4 === 0 && year % 100 !== 0) 
|| (year % 100 === 0 && year % 400 === 0)){
    console.log("nam nhuan");

}else{
    console.log("khong phai nam nhuan");
}

let Moth = parseInt(prompt("nhap vao 1 thang"));
if(Moth === 1 || Moth === 3 || Moth === 5 || Moth === 7 || Moth === 8 || Moth === 10 || Moth === 12){
    console.log(" co 31 ngay");
}else if( Moth === 4 || Moth === 6 || Moth === 9 || Moth === 11 ){
    console.log(" co 30 ngay ");
}else if( Moth === 2){
    console.log(" co 28,29 ngay");
}else{
    console.log(" nhap sai")
}

