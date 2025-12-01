// 콜백 지옥(Callback Hell)을 Promise를 사용하여 개선해보자.

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
 *  Promise.all
 *  : 여러 개의 비동기 작업을 동시에(병렬로) 실행하고, 이 작업들이 모두 성공적으로 완료될 때까지 기다렸다가, 
 *   그 결과들을 한꺼번에 모아서 처리하고 싶을 때 사용하는 메서드이다.
 */
Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
});

// undefined
// undefined
// [ '1번 주문 완료', '2번 주문 완료', '3번 주문 완료' ]