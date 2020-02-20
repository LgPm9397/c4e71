//bai 1
let year = parseInt(prompt(" nhap nam "));
if ((year % 4 === 0 && year % 100 !== 0) 
|| (year % 100 === 0 && year % 400 === 0)){
    console.log("366");
}else{
    console.log(" co 365 ngay");
}

//bai 2
let Moth = parseInt(prompt(" nhap vao 1 thang "));
if( Moth === 1 ||Moth === 3 ||Moth === 5 ||Moth === 7 ||Moth === 8 
    ||Moth === 10 ||Moth === 12){
        console.log(" co 31 ngay ");
    }else if(Moth === 4 ||Moth === 6 ||Moth === 9||Moth === 11){
        console.log(" co 30 ngay");
    }else if( Moth === 2){
        console.log(" co 28 ngay hoac 29 ngay ");
    }else{
        console.log(" nhap sai");
    }
let Year = parseInt(prompt(" nhap nam "));
if ((Year % 4 === 0 && Year % 100 !== 0) 
|| (Year % 100 === 0 && Year % 400 === 0)){
    console.log("nam nhuan");

}else{
    console.log("khong phai nam nhuan");
}
//bai 3
let Moth1 = parseInt(prompt(" nhap mot thang "));
if( Moth1 = 1 && Moth1 === 2 && Moth1 === 3){
    console.log(" mua xuan ");
}else if( Moth1 === 4 && Moth1 === 5 && Moth1 === 6){
    console.log(" mua he ");
}else if( Moth1 === 7 && Moth1 === 8 && Moth1 === 9){
    console.log(" mua thu");
}else if ( Moth1 === 10 && Moth1 === 11 && Moth1 === 12){
    console.log(" mua dong");
}else{
    console.log(" nhap sai thang")
}

//bai 4
