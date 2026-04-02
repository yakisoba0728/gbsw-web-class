let i = 0;
while (i <= 4) {
  if (i == 4) {
    continue;
  }
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 4);

name: while (true) {
  while (true) {
    continue name;
  }
}
