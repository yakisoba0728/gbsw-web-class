const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("번호를 입력하세요 > ", function (number) {
  let result;
  switch (number) {
    case 1:
      result = "엄마";
      break;
    case 2:
      result = "아빠";
      break;
    case 3:
      result = "동생";
      break;
    default:
      result = "해당 단축키가 없습니다.";
  }
  console.log(result);
  rl.close();
});
