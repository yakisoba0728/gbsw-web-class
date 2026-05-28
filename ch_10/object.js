const obj = {
  name: "김동혁",
  age: 17,
};

obj.gender = "male";
delete obj.gender;
console.log(obj);

let id = "1";
let pw = "2";
const cred = {
  id,
  pw,
};
console.log(cred);

const ddd = [1, 2, 3, 4];

for (let iii of ddd) {
  console.log(iii);
}

for (let key in obj) {
  console.log(key + ", " + obj[key]);
}
