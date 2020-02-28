// for (let index = 0; index < 10; index+=2) {
//     // console.log("hello word")
//     console.log(index);

// }
// // for (let index = 10; index >= 0; index--) {
// //     console.log(index)

// // }

// let m = parseInt(prompt(" nhap so vong lap"));
// let n = parseInt(prompt(" nhap so vong lap"));
// let a,b;
// // Math.max(), Math.min();
// // a = (m<n ? m:n);
// if(m<n){
//     // for (let i = m; i <= n; i++) {
//     //     console.log(i);

//     // }
//    a=m; b=n;
// }else{
//     // for (let i = m; i < n; i++) {

//     //  console.log(i);
//     // }
//    a=n; b= m;
// }
// // B1 kb: a,b vs am min(m,n), b = max(m,n)
// // B2 for a=> b

// // tinh toong
// let M = 10
// let S = 0;
// for (let i = 1; i <= M; i++) {
//    S = S + i;// S += i

// }
// console.log(S);

// let M = 11;
// let s = 1;
// for (let index = 0; index <= M; index+=2) {
//     s= s+ index;

// }

// // console.log(s);
// for (let index = 1; index <=M ; index+=2) {
//     s = s + index

// }
// console.log(s);

// for (let index = 1 / 1; index <= 1 / M; index++) {
//   s = s + 1 / index;
// }
// console.log(s);

// for (let index = 1/1*2; index <= 1/M(M+1); index++) {
//     s = s + 1/index

// }
// console.log(s);

// for (let index = 1/2; index <= M/M+1; index++) {
//     s = s +index/index + 1)

// }
// console.log(s);

//s = s + 1


//
// let M = 11
// s = 0
// let giaiThua = 1
// for (let i = 1; i <= M; i++) {
//     let giaiThua = 1;
//     for (let j = 1; j <= i; j++) { // tinh giai thua
//      giaiThua = giaiThua * j;
//     }
//     s = s + giaiThua;
// }
// // console.log(s);
// let M =12
// s =1;
// let giaiThua = 1;
// for (let i = 2; i <= M ; i++) {
//     giaiThua = giaiThua * i;
//     s = s + giaiThua;
// }console.log(s)

// let n = Number(prompt(" nhap N"));
// while(n <8){
//     n = Number(prompt(" nhap lai N >= 8"));
// }
// console.log(n);

// let password = prompt (" nhap mat khau");
// while(password.length < 8){
//     password = prompt(" nhap laij mat khau");
// }
// console.log(password);

//nhap so chan > 10

// let n = parseInt(prompt(" nhap so chan"));
// while(!(n >= 10 && n % 2 === 0 )){ 
//  n = parseInt(prompt(" nhap so chan"));   
// }
// console.log(n);

let pass = prompt("nhap ky tu")
while(!(pass.length > 8 && pass.search(`@`) >= 0)){
    pass = prompt( " nhap lai mat khau");
}
console.log(pass);