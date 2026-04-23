const orderCoffee = function (num) {
  console.log(`${num}번째 주문`);
  const makeCoffee = function () {
    console.log(`${num}번째 커피가 완성되었습니다.`);
  };
  setTimeout(makeCoffee, 5000);
};

for (let i = 1; i <= 30; i++) {
  orderCoffee(i);
}
