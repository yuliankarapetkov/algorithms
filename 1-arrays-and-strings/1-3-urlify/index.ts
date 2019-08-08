// Problem: Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to hold the additional characters, 
// and that you are given the "true" length of the string. 
// (Note: If implementing in Java, please use a character array so that you can perform this operation in place.) 
// EXAMPLE Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith" Hints: #53, # 118

// Solution #1 (mine):
function replaceAll(str: string, findChar: string, replaceChar: string): string {
    return str.split(findChar).join(replaceChar);
}

function urlify(str: string): string {
    return replaceAll(str, ' ', '%20');
}

// Solution #2 (book): 
// Of course, the JS implementation doesn't actually work because in JS we cannot edit chars at a specific index natively.
function urlify2(str: string): string {
    let spaceCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            spaceCount++;
        }
    }

    let index = str.length + (spaceCount * 2);
    let strAsArray = new Array(index);

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            strAsArray[index - 1]   = '0';
            strAsArray[index - 2]   = '2';
            strAsArray[index - 3]   = '%';
            index -= 3;
        } else {
            strAsArray[index - 1] = str[i];
            index--;
        }
    }

    return strAsArray.join(); // returns a comma-separated char list
}
