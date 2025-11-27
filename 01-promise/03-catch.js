// then 이외에 catch 와 finally를 사용할 수 있다.

/**
 * catch
 * : 첫번째 실행에 따라 나온 에러도 잡아줄 수 있기 때문에 catch를 사용하는 것이 더 좋다.
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
)