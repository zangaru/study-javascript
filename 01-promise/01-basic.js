/**
 * resolve: 성공했을 때 실행되는 함수
 * reject: 실패했을 때 실행되는 함수
 */
const pr = new Promise((resolve, reject) => {
  // code
});


// 다음 코드는 pending 이였다가 3초 후에 fulfilled로 바뀐다.
const resolvePr = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('OK')
  }, 3000)
});

// 다음 코드는 pending 이였다가 3초 후에 rejected로 바뀐다.
const rejectPr = new Promise((resolve, reject) => {
  setTimeout(()=> {
    reject(new Error('error..'))
  }, 3000)
});