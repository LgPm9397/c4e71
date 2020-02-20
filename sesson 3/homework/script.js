// bai 1
let r = parseInt(prompt(" nhap ban kinh hinh tron"));
let P = 2 * r * Math.PI;
let S = r * r * Math.PI;
console.log(`chu vi hinh tron ban kinh ${r} la ${P}`);
console.log(`dien tich hinh tron ban kinh ${r} la ${S}`);

//bai 2
let a = parseInt(prompt(" nhap chieu dai hinh chu nhat"));
let b = parseInt(prompt(" nhap chieu rong hinh chu nhat"));
let P1 = 2 * (a + b);
let S1 = a * b;
console.log(` chu vi hinh chu nhat ban kinh ${a,b} la ${P1}`);
console.log(`dien tich hinh chu nhat ban kinh ${a,b} la ${S1}`);

// bai 3
//a
let x1 = parseInt(prompt(" nhap so"));
let y1 = 4 * (Math.pow(x1,2) + 10 * x1 * Math.sqrt(x1 + 3 * x1 + 1));
console.log(y1);
//b 
let x2 = parseInt(prompt(" nhap so"));
let y2 = (Math.sin(Math.PI * Math.pow(x2,2) + Math.sqrt(Math.pow(x2,2) +1)) /(Math.pow(Math.E,x2) + Math.cos((Math.PI / 4) * x2)));
console.log(y2);

// bai 4
