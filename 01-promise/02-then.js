/**
 * then을 이용하여 resolve와 reject를 처리할 수 있다.
 */
const pr = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('OK')
  }, 3000)
});

pr.then(
  function(result){}, // promise가 이행되었을 때 실행되는 함수
  function(err){} // 거부되었을 때 실행되는 함수
)

///////////////////////////////////////////////////////////////

const resolvePr = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('OK')
  }, 3000)
});

resolvePr.then(
  function(result) {
    console.log(result + ' 가지러 가자.');
  },
  function(err) { // resolve로 실행되었기 때문에 이 코드는 현재 실행되지 X
    console.log('다시 주문해주세요..'); 
  }
)