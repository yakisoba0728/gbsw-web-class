const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("점수 입력하셈 > ", function (score) {
  let result;
  if (score >= 90) {
    result = "장학대상";
  } else if (score <= 90 && score >= 60) {
    result = "합격";
  } else if (score <= 60 && score >= 0) {
    result = "불합격";
  }
  if (score < 0 || score > 100) {
    result = "유효하지 않음";
  }
  console.log(result);
  rl.close();
});
