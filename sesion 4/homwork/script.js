//bai 1
let year = parseInt(prompt(" nhap nam "));
if ((year % 4 === 0 && year % 100 !== 0) 
|| (year % 100 === 0 && year % 400 === 0)){
    console.log("co 366 ngay");
}else if( year <= 0){
    console.log(" nhap sai")
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
let a = parseInt(prompt(" nhap so dau tien"));
let b = parseInt(prompt(" nhap so thu hai"));
let c = parseInt(prompt(" nhap so thu ba"));
if(a < b < c){
    console.log(a , b , c);
}else if(a < c < b){
    console.log(a , c , b);
}else if(b < c < a){
    console.log(b , c , a);
}else if(b < a < c){
    console.log(b , a ,c);
}else if(c < a <b){
    console.log( c , a , b);
}else if(c < b < a){
    console.log(c , b , a);
}else{
    console.log(" truong hop khac")
}

// bai 5
let a1 = parseInt(prompt(" nhap canh tam giac"));
let b1 = parseInt(prompt(" nhap canh tam giac"));
let c1 = parseInt(prompt(" nhap canh tam giac"));
if( a1 === b1 === c1){
    console.log(" tam giac deu");
}else if( Math.pow(a1, 2) + Math.pow(b1 , 2) === Math.pow(c1, 2)){
    console.log(" tam giac vuong");
}else if(a1 === b1 !== c1){
    console.log(" tam giac can")
}else if(a1 <= 0 , b1 <= 0 , c1 <= 0){
    console.log(" nhap sai")
}
else{
    console.log(" la tam giac")
}

//bai 6
let kWh = parseInt(prompt(" nhap so dien thang nay"));
if( kWh <= 50){
    console.log( kWh * 1678);
}else if( 51 <= kWh <= 100 ){
    console.log( kWh * 1734);
}else if( 101 <= kWh <= 200){
    console.log( kWh * 2014);
}else if( 201 <= kWh <= 300){
    console.log( kWh * 2536);
}else if( 301 <= kWh <= 400){
    console.log( kWh * 2834)
}else if( kWh >= 401){
    console.log( kWh * 2927);
}else if(kWh <= 0){
    console.log(" nhap sai")
}

//bai 7
let kg = parseInt(prompt(" nhap can nang kg"));
let m = parseInt(prompt(" nhap chieu cao m (1.6)"));
let BMI = kg / (m * m);
if( BMI <= 18.5){
    console.log(" gay");
}else if(18.6 <= BMI <= 24.9){
    console.log(" binh thuong");
}else if(25 <= BMI <= 29.9){
    console.log(" hoi beo");
}else if( 30 <= BMI <= 34.9){
    console.log(" beo phi cap do I")
}else if(35 <= BMI <= 39.9){
    console.log(" beo phi cap do II")
}else if(BMI >= 40){
    console.log(" beo phi cap do III")
}else if(BMI<= 0){
    console.log(" xin nhap lai");
}
else{
    console.log(" xin moi nhap lai")
}