console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

const age = 27;
const result = age >= 8 && age <= 19 ? "팩트" : "거짓말";
console.log(result);

const nickname = null;
const babo = nickname ?? "익명이래요";
console.log(babo);

let nick = null;
console.log(nick ?? "익명");
nick = undefined;
console.log(nick ?? "익명");
nick = "히히";
console.log(nick ?? "익명");
