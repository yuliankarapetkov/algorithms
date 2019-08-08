// Problem:
// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures? 

// Solution #1:
// This will work fine in most cases, but if the charCode happens to be a large number, 
// this will increase the amount of memory used dramatically. 
function isUnique(str: string): boolean {
    const used = [];

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);

        if (used[charCode]) {
            return false;
        } 
        
        used[charCode] = true;
    }

    return true;
}

// Solution #2:
// Storage issue does not apply in the case of using ASCII chars only.
function isUniqueAscii(str: string): boolean {
    const asciiCharsLength = 128;
    
    if (str.length > asciiCharsLength) {
        return false;
    }

    const used = new Array(asciiCharsLength);

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);

        if (used[charCode]) {
            return false;
        } 
        
        used[charCode] = true;
    }

    return true;
}
