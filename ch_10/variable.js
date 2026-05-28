function functionScope() {
  if (true) {
    var a = 15;
  }
  console.log(a);
}

functionScope();

function blockScope() {
  if (true) {
    let a = 15;
  }
  console.log(a);
}

blockScope();

// var 힝
// let/var 재할당가능, const불가능.
// var이놈은 재선언도 가능 ㅁㅊ놈임
