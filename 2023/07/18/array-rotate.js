const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

// function arrayRotate(arr, k) {
//   for (let i = 0; i < k; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// }

function arrayRotate(arr, k) {
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(arrayRotate(arr, k));