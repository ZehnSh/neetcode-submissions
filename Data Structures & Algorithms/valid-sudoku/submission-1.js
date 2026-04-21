class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
       

    // Step 1: Create 9 separate Sets for rows, cols, boxes
    // rows[0] tracks numbers in row 0, rows[1] in row 1, etc.
    const rows  = Array.from({length: 9}, () => new Set());
    const cols  = Array.from({length: 9}, () => new Set());
    const boxes = Array.from({length: 9}, () => new Set());

    // Step 2: Visit every cell on the 9x9 board
    for (let i = 0; i < 9; i++) {       // i = row number (0 to 8)
        for (let j = 0; j < 9; j++) {   // j = col number (0 to 8)

            const val = board[i][j];    // get value at this cell

            // Step 3: Skip empty cells (marked as '.')
            if (val === '.') continue;

            // Step 4: Find which box (0-8) this cell belongs to
            const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Step 5: Check if this value was already seen
            if (rows[i].has(val))   return false;  // duplicate in row i
            if (cols[j].has(val))   return false;  // duplicate in col j
            if (boxes[box].has(val)) return false; // duplicate in box

            // Step 6: Mark as seen in all three
            rows[i].add(val);
            cols[j].add(val);
            boxes[box].add(val);
        }
    }

    // Step 7: No duplicates found anywhere → valid board
    return true;

        
    }
}
