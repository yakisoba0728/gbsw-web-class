function solution(numbers) {
  var answer = [];
  for (var i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

function solution(numbers) {
  var answer = 0;
  for (var i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  answer /= numbers.length;
  return answer;
}

function solution(numbers, num1, num2) {
  var answer = [];
  answer = numbers.slice(num1, num2 + 1);
  return answer;
}

function solution(arr, delete_list) {
  var answer = arr;
  for (var i = 0; i < delete_list.length; i++) {
    answer = answer.filter((v) => !delete_list.includes(v)); //사용법 숙지 필요할듯
  }
  return answer;
}
