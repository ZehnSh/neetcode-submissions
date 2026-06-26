class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let map = new Map()

        for (let char of s) {
            map.set(char, (map.get(char) || 0) + 1)
            
        }

        for (let char of t ) {
            map.set(char, (map.get(char) || 0) - 1)
        }

        for(let val of map.values()) {
            if(val != 0 ){
                return false
            }
        }
        return true
    }
}
