// Problem:
// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures? 

// Solution #1 (mine):
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

// Solution #3:
// From book: We can reduce our space usage by a factor of eight by using a bit vector. 
// We will assume, in the below code, that the string only uses the lowercase letters a through z. 
// This will allow us to use just a single int.
// Personal note: in the book they are referring to Java's 32-bit ints, and although JS has 64-bit floating point numbers,
// bitwise operators are performed on 32-bit ints so it's basically the same as in Java.
// This means that the "array" can only be 32 bits long.
function isUniqueBitwise(str: string): boolean {
    let checker = 0;

    for (let i = 0; i < str.length; i++) {
      const val = str.charCodeAt(i) - 97;
      const check = 1 << val;
      console.log(`1 << ${val} = ${check} => 1 << ${val.toString(2)} = ${check.toString(2)}`)
      if ((checker & check) > 0) {
        return false;
      }

      checker = checker | check;
      console.log(`checker = ${checker} = ${checker.toString(2)}`)
    }

    return true;
}
