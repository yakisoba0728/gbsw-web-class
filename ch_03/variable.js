let a = 10;
let b = a;

const c = 15;
//c = 10; const 변수는 재할당이 불가함.
console.log(a, b, c);

let var1 = 10;
let var2 = 20;
(var1, (var2 = var2), var1);
console.log(var1, var2);
