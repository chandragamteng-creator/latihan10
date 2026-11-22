"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let baris = 2, kolom = 2, i, j;
let A = [[6, 3], [4, 2]];
let B = [[3, 2], [2, 1]];
let C = [];
// Operasi penjumlahan matriks
for (i = 0; i < baris; i++) {
    C[i] = []; // buat baris baru terlebih dahulu
    for (j = 0; j < kolom; j++) {
        C[i][j] = A[i][j] + B[i][j];
    }
}
console.log("Matrik A :");
for (i = 0; i < baris; i++) {
    for (j = 0; j < kolom; j++) {
        process.stdout.write(A[i][j] + " ");
    }
    console.log();
}
console.log("Matrik B :");
for (i = 0; i < baris; i++) {
    for (j = 0; j < kolom; j++) {
        process.stdout.write(B[i][j] + " ");
    }
    console.log();
}
console.log("Matrik A+B :");
for (i = 0; i < baris; i++) {
    for (j = 0; j < kolom; j++) {
        process.stdout.write(C[i][j] + " ");
    }
    console.log();
}
//# sourceMappingURL=hello.js.map