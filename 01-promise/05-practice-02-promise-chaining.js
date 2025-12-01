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
 *  프로미스 체이닝 (Promises chaining)
 *  : 여러 개의 비동기 작업을 순서대로 실행하고, 이전 작업의 결과를 다음 작업에 전달할 때 사용하는 기법
 */
console.log("시작")
f1()
.then((res) => f2(res))
.then((res) => f3(res))
.then((res) => console.log(res))
.catch(console.log) // 체인의 모든 오류를 일괄 처리
.finally(() => { // 성공/실패 무관 최종 동작 정의
  console.log("끝"); 
})

// 시작
// 1번 주문 완료
// 2번 주문 완료
// 3번 주문 완료
// 끝

