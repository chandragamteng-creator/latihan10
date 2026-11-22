import * as readline from "readline-sync";

let i: number;
let jumlah: number = 4;
let a: number[] = [];

// memasukkan data
for (i = 0; i < jumlah; i++) {
    a[i] = Number(readline.question(`Masukkan data ke-${i + 1} : `));
}

console.log("-------Data Array-------");
for (i = 0; i < jumlah; i++) {
    console.log(`Data ke-${i + 1} : ${a[i]}`);
}