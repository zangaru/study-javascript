/**
 * Callback Hell
 * : 비동기 작업을 순차적으로 실행하기 위해 콜백 함수 안에 또 다른 콜백 함수를 중첩해서 호출하는 구조를 만들게 되면, 
 *   코드가 오른쪽으로 계속 깊어지는 형태가 되는데 이를 콜백 지옥 이라고 부른다. 
 *   가성비가 매우 떨어지고 에러 처리가 복잡해진다.
 */

const f1 = (callback) => {
  setTimeout(function () {
    console.log("1번 주문 완료");
    callback(); // 주문 완료(비동기 작업 끝) 후, 받은 함수(callback)을 호출
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(function () {
    console.log("2번 주문 완료");
    callback();
  }, 3000);
};

const f3 = (callback) => {
  setTimeout(function () {
    console.log("3번 주문 완료");
    callback();
  }, 2000);
};

// 이처럼 depth가 계속 깊어지면서 callback을 호출하는 것을 callback hell 이라고 한다.
console.log("시작");
f1(function () {
  f2(function () {
    f3(function () {
      console.log("끝");
    });
  });
});

// 시작
// 1번 주문 완료
// 2번 주문 완료
// 3번 주문 완료
// 끝