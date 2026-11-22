import * as readline from "readline-sync";

let i: number;
let jumlah: number = Number(readline.question("Masukkan jumlah data : "));
let a: number[] = [];
let angkaCari: number;
let ditemukan: boolean = false;

// memasukkan data
for (i = 0; i < jumlah; i++) {
    a[i] = Number(readline.question(`Masukkan data ke-${i + 1}: `));
}

// memasukkan angka yang dicari
angkaCari = Number(readline.question("Masukkan angka yang ingin dicari : "));

// pencarian menggunakan perulangan
for (i = 0; i < jumlah; i++) {
    if (a[i] === angkaCari) {
        ditemukan = true;
        break;
    }
}

// menampilkan hasil
if (ditemukan) {
    console.log("data ditemukan");
} else {
    console.log("data tidak ditemukan");
}