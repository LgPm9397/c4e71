let welcome = "xin chao";

let welcome1 = `${welcome} C4EJS71`;

console.log(welcome1);

let x = 10;
let y = 4*(10*10+10*10*Math.sqrt(Math.pow(10,2)+3*10+1));
console.log(y);

let yourName = "A"
alert("xin chao" + yourName);

let x1 = Number("3");
let y1 = Number("7");
console.log(x1 + y1);
// chuoi => so nguyen
x = parseInt("3.4");
console.log(x);

//chuoi => so thuc
y = parseFloat("2.411111");

//so => chuoi
//so +''
let s =  10 + ''; //=> s = 10

let r = parseFloat(prompt("nhap ban kinh hinh tron"));
let P = 2 * r * Math.PI;
let S = r * r * Math.PI;
console.log(`chu vi hinh tron ban kinh ${r} la: ${P}`);
console.log(`dien tich hinh tron ban kinh ${r} la ${S}`);

let a = parseFloat(prompt("nhap chieu dai hinh chu nhat"));
let b = parseFloat(prompt("nhap chieu rong hinh chu nhat"));
let P1 = 2 * (a + b );
let S1 = a * b;
console.log(`chu vi hinh chu nhat ban kinh ${a,b} la ${P1}`);
console.log(`dien tich hinh chu nhat ban kinh ${a,b} la ${S1}`);

console.log(typeof r);
let name = "acb";
console.log(typeof name);
console.log( typeof 7);