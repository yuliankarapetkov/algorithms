// Problem: Write a recursive function to multiply two positive integers 
// without using the * operator (or / operator). 
// You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations. 

// Solution #1 (book):
export function minProduct(a: number, b: number): number {
    const bigger = a < b ? b : a;
    const smaller = a < b ? a : b ;

    return minProductHelper(smaller, bigger);
}

function minProductHelper(smaller: number, bigger: number): number {
    if (smaller === 0) { // 0 x bigger = 0
        return 0;
    } else if (smaller === 1) { // 1 x bigger = bigger
        return bigger;
    }

    const s = smaller >> 1;
    const side1 = minProduct(s, bigger);
    let side2 = side1;

    if (smaller % 2 === 1) {
        side2 = minProductHelper(smaller - s, bigger);
    }

    return side1 + side2;
}

// Solution #2 (book):
export function minProductOptimized(a: number, b: number): number {
    const bigger = a < b ? b : a;
    const smaller = a < b ? a : b ;

    const memo = [];

    return minProductHelperOptimized(smaller, bigger, memo);
}

function minProductHelperOptimized(smaller: number, bigger: number, memo: number[]): number {
    if (smaller === 0) { // 0 x bigger = 0
        return 0;
    } else if (smaller === 1) { // 1 x bigger = bigger
        return bigger;
    } else if (memo[smaller] && memo[smaller] > 0) {
        return memo[smaller];
    }

    const s = smaller >> 1;
    const side1 = minProductHelperOptimized(s, bigger, memo);
    let side2 = side1;

    if (smaller % 2 === 1) {
        side2 = minProductHelperOptimized(smaller - s, bigger, memo);
    }

    memo[smaller] = side1 + side2;
    return memo[smaller];
}