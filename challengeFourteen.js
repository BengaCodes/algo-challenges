"use strict";
// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:
// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product. After the algorithm has finished, there will be a single element left in the array. Return that element.
function arrayConversions(nums) {
    let isOdd = true;
    while (nums.length !== 1) {
        nums = sumProduct(nums, isOdd);
        isOdd = !isOdd;
    }
    return nums[0];
}
console.log(arrayConversions([1, 2, 3, 4, 5, 6, 7, 8]));
// ! Helper function
function sumProduct(nums, isOdd) {
    const sumProducts = [];
    if (isOdd) {
        for (let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] + nums[i + 1]);
        }
    }
    else {
        for (let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] * nums[i + 1]);
        }
    }
    return sumProducts;
}
