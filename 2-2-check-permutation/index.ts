// Problem:  Given two strings, write a method to decide if one is a permutation of the other. 

// Solution #1 (mine):
// O(n) or O(1).
function getChecker(str: string): number {
    let checker = 1 << 30;

    for (let i = 0; i < str.length; i++) {
        const val = str.charCodeAt(i) - 97;
        const check = 1 << val;
        checker = checker | check;
    }

    return checker;
}

function checkPermutationBitwise(str1: string, str2: string): boolean {
    const str1Checker = getChecker(str1);
    const str2Checker = getChecker(str2);

    console.log(`${str1Checker.toString(2)} & ${str2Checker.toString(2)} = ${(str1Checker & str2Checker).toString(2)}`)
    return (str1Checker === str2Checker);
}
