let num = 0;
while (num < 10) {
  num++;
  if (num % 2 == 0) {
    continue;
  }
  console.log(num);
}

num = 1;
while (num <= 10) {
  if (num == 7) {
    break;
  }
  console.log(num);
  num++;
}
