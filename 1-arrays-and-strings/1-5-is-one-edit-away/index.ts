// Problem:  There are three types of edits that can be performed on strings: insert a character, 
// remove a character, or replace a character. Given two strings, write a function to check 
// if they are one edit (or zero edits) away.
// EXAMPLE: pale, ple -> true; pales, pale -> true; pale, bale -> true; pale, bake -> false;

// Solution #1 (mine):
export function isOneEditAway(source: string, change: string): boolean {
    const { length: length1 } = source;
    const { length: length2 } = change;
    
    const difference = length1 - length2;
    let bigger, smaller;

    if (difference > 1 || difference < -1) {
        return false;
    } else if (difference == 1) {
        bigger = source;
        smaller = change;
    } else {
        bigger = change;
        smaller = source;
    }

    let hasChanged = false;

    for (let i = 0, changeFactor = 0; i < bigger.length; i++) {
        const biggerChar = bigger[i + changeFactor];
        const smallerChar = smaller[i];

        if (biggerChar !== smallerChar) {
            if (hasChanged) {
                return false;
            }

            hasChanged = true;
            changeFactor = -1;
        }
    }

    // TODO: have to check for the last iteration

    return true;
}
