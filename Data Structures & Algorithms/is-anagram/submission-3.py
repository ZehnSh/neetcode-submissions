class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s)!= len(t):
            return False

        count = {}
        count1= {}
        for ch in s:
            count[ch] = count.get(ch,0) + 1
        
        for ch in t:
            count1[ch] = count1.get(ch,0) + 1
        if count == count1:
            return True
        return False
