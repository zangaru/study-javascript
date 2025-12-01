// async/await는 Promise 기반의 비동기 코드를 마치 동기 코드(synchronous code)를 작성하는 것처럼 보이게 해주는 문법이다.
// -> '비동기적'이라는 것은 어떤 작업이 끝날 때까지 기다리지 않고, 일단 다음 작업을 먼저 실행하는 방식을 의미

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
      //res("2번 주문 완료");
      rej(new Error("err.."));
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

// 에러를 try-catch문으로 감싸준다. 
async function order() {
  try {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3); 
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();

// 1번 주문 완료
// Error: err..
//     at Timeout._onTimeout (/Users/garu/Documents/workspace/study-javascript/02-async-await/03-practice.js:17:11)
//     at listOnTimeout (node:internal/timers:573:17)
//     at process.processTimers (node:internal/timers:514:7)
// 종료