let hargaMotor;
let dpMotor;
let lamaCicilan;
let bungaCicilan;
let usiaPembeli;

function hitungCicilan(hargaMotor, dpMotor, lamaCicilan, usiaPembeli) {

    if (dpMotor < 0.3 * hargaMotor){
        console.log("DP kurang dari 30%");
    }

    if (usiaPembeli < 21 || usiaPembeli > 55) {
        console.log("Usia pembeli kurang dari 21 tahun");
    }

    let bungaPersen = 0
    if (lamaCicilan == 12) {
        bungaPersen = 0.03;
    } else if (lamaCicilan == 24) {
        bungaPersen = 0.06;
    } else if (lamaCicilan == 36) {
        bungaPersen = 0.10;
    } else if (lamaCicilan == 48) {
        bungaPersen = 0.20;
    } else {
        console.log("Lama cicilan tidak sesuai");
    }

    let pokokPinjaman = hargaMotor - dpMotor;
    let bungaCicilan = bungaPersen * pokokPinjaman;
    console.log("Bunga cicilan: " + bungaCicilan);


    for (let i = 1; i <= lamaCicilan; i++) {
        let cicilanPerBulan = bungaCicilan * i;
        console.log("Cicilan bulan ke-" + i + ": " + cicilanPerBulan);
    }

    return bungaCicilan;

    return (pokokPinjaman + bungaCicilan) / lamaCicilan;
}

console.log(hitungCicilan(20000000, 5000000, 12, 21));






