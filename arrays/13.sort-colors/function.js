// # Sort Colors
// Given an array of n colored objects, sort the array in place so that objects of the same color are adjacent, with the colors in a specific order.

// ## Statement
// Given an array of n objects colored white, red, or blue, sort the array in place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// This problem is known as Dutch National Flag Problem. The idea is to attribute a color to each number and then arrange them following the order of colors on the Dutch flag.
// We’ll use the integers 0, 1, and 2 to represent red, white, and blue, respectively.

// ### Constraints
// Input numbers are restricted to 0, 1, or 2.

// #### Sample input
// [2, 0, 2, 1, 1, 0]
// Expected output
// [0, 0, 1, 1, 2, 2]

function solveProblem(nums){
    let start = 0;
    let end = nums.length - 1;
    let index = 0;

    while (start < end && index <= end){
        if (nums[index] == 0){
            let tmp = nums[start];
            nums[start] = nums[index];
            nums[index] = tmp;
            start++;
            index++;
        }else if(nums[index] == 2){
            let tmp = nums[end];
            nums[end] = nums[index];
            nums[index] = tmp;
            end--;
            index++;
        }else{
            index++;
        }
    }

    return nums;
}

const input = [2, 0, 2, 1, 1, 0];
const output = solveProblem(input);
console.log(output);
