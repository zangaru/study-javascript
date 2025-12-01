const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
      //rej(new Error("err.."));
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

async function order() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result); 
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();

// undefined
// undefined
// [ '1번 주문 완료', '2번 주문 완료', '3번 주문 완료' ]
// 종료