// ES5 > 바구조화 활당
// 배열이나 객체를 해제하여 변수에 활당하는 것을 바구조화 활당(구조 분배 할당)이라고 한다
const color = ["A", "G", "B"];
const langs = ["C#", "JS", "Java", "PHP", "Rust", "C++", "Kotlin"];

//구조분해 활당을 사용하지 않을때
// let r = color[0];
// let g = color[1];
// let b = color[2];

let [r, g, b] = color;
[b, g, r] = [r, g, b];

//let a = 10;
//let b = 5;

// 표현식에 = {기본값} 형태로 기본값 지정 가능
let [first, second, third = "C"] = langs;

//,를 이용해 다음 요소로 건너뛰기 가능
let [csharp, , Java, php] = langs;

let asdf = 10;
let zxcv = 15;

//별도 변수 없이 서로 값 변경가능
[asdf, zxcv] = [zxcv, asdf];

// 전개 연산자 사용하여 배열의 나머지 부분을 처리하거나, 배열끼리 결합 가능
[first, second, third = "C", ...rest] = langs;
console.log(rest);

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user = {
  id: "gbsw",
  pw: "1234",
  name: "지내움",
  age: 27,
};

let { id, ...others } = user;

console.log(id);
console.log(others);
