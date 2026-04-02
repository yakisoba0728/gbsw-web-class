function solution(num_list) {
  var one = num_list[0];
  for (var i = 1; i < num_list.length; i++) {
    one *= num_list[i];
  }
  console.log(one);
  var two = 0;
  for (var ii = 0; ii < num_list.length; ii++) {
    two += num_list[ii];
  }
  two = two ** 2;
  console.log(two);
  if (one < two) {
    return 0;
  } else {
    return 1;
  }
}

console.log(solution([1, 2, 3, 4]));
