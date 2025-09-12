function Mobil(brand, model, warna) {
    this.brand = brand;
    this.model = model;
    this.warna = warna;
    this.showMobil = function() {
      console.log(`merk Mobil: ${this.brand} ${this.model}, Warna: ${this.warna}`);
    };
}

let Mobil1 = new Mobil("toyota","avanza", "hitam");
let Mobil2 = new Mobil("honda","civic","putih");

console.log("brand (Mobil1):", Mobil1.brand);
console.log("Model (Mobil2):", Mobil2.brand);

Mobil1.showMobil();
Mobil2.showMobil();