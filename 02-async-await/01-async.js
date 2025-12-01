/**
 * async
 * : 함수 앞에 async 키워드를 붙이면, 해당 함수는 항상 Promise를 반환하도록 강제된다.
 */

async function getName() {
  return "Mike";
}
// console.log(getName()); // Promise { 'Mike' }

getName().then((name) => {
  console.log(name);  // Mike
})