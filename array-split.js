const nums = [11,22,33,44,55,66,77,88];
const part = nums.slice(2,5);
// console.log(part);
// console.log(nums);

const removed = nums.splice(2,3,34,45,56);
console.log(removed);
console.log(nums);

const together = nums.join(",");
console.log(together);