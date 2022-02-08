flag = true;
// if (flag == true) {
//     const e = 666;
// }
// console.log(" => e = ", e);

let num = 1;
let float_num = 1.1;
let object = {
    id: 1,
    name: "Tan",
    price: 1000
};
console.log(object);
let undefine; //undefined là chưa gán giá trị nên chưa có kiểu cố định. Nó không có vùng nhớ
let huybien = null; //Bị hủy

if (num < float_num) {
    console.log("A");
};
console.log(typeof(num));

intNumber = parseInt("123.45");
floatNumber = parseFloat("123.45");
console.log(intNumber, floatNumber);
console.log("1 === 1.0 => ", 1 === 1.0); //strict comparison. 02 bên đều là kiểu number
num = 100;
console.log(Math.floor(num / 3));