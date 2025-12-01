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
      rej(new Error("xx"));
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

/**
 *  Promise.race
 *  : 여러 개의 비동기 작업을 동시에 실행시키고, 그중에서 가장 먼저 완료(resolve 또는 reject)되는 
 *   작업의 결과나 오류를 반환하는 메서드이다.
 */
Promise.race([f1(), f2(), f3()]).then((res) => {
  console.log(res);
});

// undefined
// undefined
// 1번 주문 완료