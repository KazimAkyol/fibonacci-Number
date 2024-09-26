//! Fibonacci
// 0, 1, 1, 2, 3, 5, 8...

// let solFibo = 0;
// let sagFibo = 1;
// let strFibonacci = "0 1";
// let n = +prompt("kac tane fibonacci sayisi istersiniz?");

// for (let i = 2; i < n; i++) {
//   yeniFibo = solFibo + sagFibo;

//   strFibonacci += `${yeniFibo}`;

//   solFibo = sagFibo;
//   sagFibo = solFibo;
// }

// console.log(strFibonacci);

//! GCD EBOB

// let a = +prompt("Birinci sayiyi giriniz");
// let b = +prompt("Ikinci sayiyi giriniz");
// let ebob = 1;

// for (let i = 1; i <= a && i <= b; i++) {
//   if (a % i === 0 && b % i === 0) {
//     ebob = i;
//   }
// }

// console.log("girilen sayilarin ebob'u " + ebob);

//!Armstrong Sayilari

//? Elimizdeki sayiyi rakamlara ayirip, basamak sayisini bu rakamlara üs olarak veriyoruz ve bu sayilari topluyoruz. Toplama islemi sonucu yine ayni sayi cikiyorsa elimizdeki sayiya Armstrong Sayi deriz.

// . 153: 1**3+5**3+3**3 = 1 + 125 + 27 = 153
// . 370: 3**3+7**3+0**3 = 27 + 343 + 0 = 370
// . 371: 3**3+7**3+1**3 = 27 + 343 + 1 = 371
// . 407: 4**3+0**3+7**3 = 64 + 0 + 343 = 407
// . 1634: 1**4+6**4+3**4+4**4 = 1 + 1296 + 81 +256 = 1634
// . 8208
// . 9474
// . 54748

// function armstrongNumber(num) {
//   let basamak = 0;
//   basamakSayisi = 0;
//   sum = 0;
//   while (num != 0) {
//     basamak = num % 10;
//     num = Math.trunc(num / 10);
//     console.log(basamak);
//     basamakSayisi++;
//     sum = sum + Math.pow(basamak, basamakSayisi);
//   }
//   return `${basamakSayisi} ${sum}`;
// }
// console.log(armstrongNumber(153));

console.log("*********** Armstrong ****************")

function armstrongNumber(num) {
    let number = num;
    let basamak;
    let basamakSayisi = num.toString().length;
    let sum = 0;

    while (num != 0) {
        basamak = num % 10
        sum += Math.pow(basamak, basamakSayisi)
        num = Math.trunc(num / 10);
    }
    if (sum === number) {
        return `${number} armstrong bir sayidir`
    } else {
       return `${number} armstrong degildir`
    }
}
console.log(armstrongNumber(153))

//! sayinin her bir basamagini alip basamak sayisina göre üssünü alip toplayalim:

while (orjinalNumber > 0) {
    let digit = orjinalNumber % 10; //son basamagi bulduk
    sum += digit ** digitCount; //basamagin digitCount kadar üssünü ekle
    orjinalNumber = Math.floor(orjinalNumber/10)
}
