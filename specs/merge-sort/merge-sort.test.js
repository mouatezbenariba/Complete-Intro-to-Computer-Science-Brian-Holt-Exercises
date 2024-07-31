/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // Base Case
  if (nums.length < 2) {
    return nums;
  }

  const middleindex = Math.floor(nums.length / 2);
  const [leftArray, rightArray] = [nums.slice(0, middleindex), nums.slice(middleindex)];
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return result.concat(left, right);
};

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
