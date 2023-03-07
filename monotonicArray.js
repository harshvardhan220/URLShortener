function isMonotonic(nums) {
    let n = nums.length;
    let inc = true;
    let dec = true;
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i-1]) {
            inc = false;
        }
        if (nums[i] > nums[i-1]) {
            dec = false;
        }
    }
    return inc || dec;
}

console.log(isMonotonic([1,2,2,3])); // Output: true
console.log(isMonotonic([6,5,4,4])); // Output: true
console.log(isMonotonic([1,3,2]));   // Output: false