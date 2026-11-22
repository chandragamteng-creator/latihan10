import * as readline from "readline-sync";

let baris: number = Number(readline.question("Masukkan jumlah baris :"));
let kolom: number = Number(readline.question("Masukkan jumlah kolom :"));
let i: number, j: number;

let A: number[][] = [];
let B: number[][] = [];
let C: number[][] = []; // hasil penjumlahan
let D: number[][] = []; // hasil pengurangan

// input matriks A
console.log("Himpunan A");
for (i = 0; i < baris; i++) {
    A[i] = [];
    for (j = 0; j < kolom; j++) {
        A[i]![j] = Number(readline.question(`Masukkan data A[${i}][${j}] :`));
    }
}

// input matriks B
console.log("Himpunan B");
for (i = 0; i < baris; i++) {
    B[i] = [];
    for (j = 0; j < kolom; j++) {
        B[i]![j] = Number(readline.question(`Masukkan data B[${i}][${j}] :`));
    }
}

// operasi penjumlahan dan pengurangan matriks
for (i = 0; i < baris; i++) {
    C[i] = [];
    D[i] = [];
    for (j = 0; j < kolom; j++) {
        C[i]![j] = A[i]![j]! + B[i]![j]!;
        D[i]![j] = A[i]![j]! - B[i]![j]!;
    }
}

console.log("Matrik A+B :");
for (i = 0; i < baris; i++) {
    for (j = 0; j < kolom; j++) {
        process.stdout.write(C[i]![j] + " ");
    }
    console.log();
}

console.log("Matrik A-B :");
for (i = 0; i < baris; i++) {
    for (j = 0; j < kolom; j++) {
        process.stdout.write(D[i]![j] + " ");
    }
    console.log();
}