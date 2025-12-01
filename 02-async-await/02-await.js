/**
 * await
 * : await 키워드는 오직 async 함수 내부에서만 사용할 수 있다.
 */

function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

// await은 뒤따르는 Promise가 성공적으로 이행(resolved)될 때까지 해당 async 함수의 실행을 일시 중지한다.
async function showName() {
  const result = await getName('Mike');
  console.log(result);
}

console.log("시작");
showName();
// 시작
// Mike