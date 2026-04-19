class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false;

        const seenS= new Map();
        const seenT = new Map();
        for(let i = 0;i<s.length;i++) {
            seenS.set(s[i],(seenS.get(s[i]) || 0) + 1);
            seenT.set(t[i],(seenT.get(t[i]) || 0) + 1);
        }
        
        for( let [key,val] of seenS) {
            if(seenT.get(key) !==val) return false;
        }
        return true;
        
    }
}
