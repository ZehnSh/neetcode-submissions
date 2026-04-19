class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for n in range(len(nums)):
            for m in range(n+1,len(nums)):
                if target == nums[n] + nums[m]:
                    return [n,m]