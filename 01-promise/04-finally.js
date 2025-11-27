/**
 *  finally는 이행이든 거부이든 처리가 완료되면 항상 실행된다.
 */
const pr = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('OK')
  }, 3000)
});

pr.then(
  function(result){}
).catch(
  function(err){}
).finally(
	function(){
		console.log('---주문 끝---')
	}
)

/**
 * 예시-1
 */
const prResolve = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('OK')
  }, 1000)
})

console.log("시작")
prResolve.then(result => {
  console.log(result)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log("끝")
})

// 시작
// OK
// 끝 

/**
 * 예시-2
 */
const prReject = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject(new Error("err......"))
  }, 1000)
});

console.log("시작")
prReject.then(result => {
  console.log(result)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log("끝")
})

// 시작
// Error: err......
// 끝

