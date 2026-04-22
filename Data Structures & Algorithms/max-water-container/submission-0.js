class Solution {
    
 maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate current water
        let width = right - left;
        let height = Math.min(heights[left], heights[right]);
        let water = width * height;

        maxWater = Math.max(maxWater, water);

        // Move the shorter bar inward
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}
}
