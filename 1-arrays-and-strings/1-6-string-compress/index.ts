// Problem: Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2blc5a3.
//  If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. 
// You can assume the string has only uppercase and lowercase letters (a -z). 


// Solution #1 (mine):
export function compress(original: string): string {
    let compressed = '';

    for (let i = 0, reps = 1, char = original[0]; i < original.length; i++) {
        if (original[i] !== original[i + 1] || i === original.length - 1) {
            compressed += `${char}${reps}`;
            char = original[i + 1];
            reps = 1;
        } else {
            reps++;
        }
    }

    return compressed.length < original.length ? compressed : original;
}
