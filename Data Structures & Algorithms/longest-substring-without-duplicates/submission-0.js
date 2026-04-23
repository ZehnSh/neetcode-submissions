class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let left = 0;
        let right = 0;
        let maxlen=0;

        while(right<s.length) {
            let newChar = s[right];

            let isDuplicate = charSet.has(newChar);

            if(!isDuplicate) {
                charSet.add(newChar);

                let currentLen = right - left + 1;
                if(currentLen > maxlen) {
                    maxlen = currentLen;
                }

                right++;
            } else {
                charSet.delete(s[left]);
                left++;
            }
        }

        return maxlen;
    }
}
