let a = 10;

function test() {
  let a = 20;
  console.log(a);
}

test();
console.log(a);

let mod = function (a, b = 0) {
  let num = 0;
  return a % b;
};
