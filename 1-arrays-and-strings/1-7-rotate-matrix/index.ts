// Problem:  Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place? 

// Solution #1 (mine):
function initMatrix(size: number): number[][] {
    let matrix = new Array<number[]>(size);
    
    for (let i = 0; i < size; i++) {
        matrix[i] = new Array<number>(size);
    }

    return matrix;
}

export function rotateMatrix(matrix: number[][]): number[][] {
    const size = matrix.length;
    let outputMatrix = initMatrix(size);

    for (let i = 0; i < size; i++) {
        const row = matrix[i];

        for (let j = 0; j < size; j++) {
            outputMatrix[j][size - i - 1] = row[j];
        }
    }

    return outputMatrix;
}
