// //!Fibonacci
// //0, 1, 1, 2, 3, 5, 8
// let solFibo = 0;
// let sagFibo = 1;
// let strFibonacci = "0 1";
// let n = +prompt("kac tane fibonacci sayisi istersiniz?");
// for (let i = 2; i < n; i++) {
//     yeniFibo = solFibo + sagFibo;
//     strFibonacci += ` ${yeniFibo}`
//     solFibo = sagFibo;
//     sagFibo = yeniFibo;
// }
// console.log(strFibonacci);
// //!GCD EBOB
// let a = +prompt("Birinci sayiyi girin");
// let b = +prompt("ikinci sayiyi girin");
// let ebob = 1;
// for (let i = 1; i <=a && i<=b; i++) {
//     if (a % i ===0 && b % i ===0) {
//         ebob = i;
//     }
// }
// console.log("girilen sayilarin ebob u " + ebob);
//!Armstrog sayilari
// Elimizdeki sayiyi rakamlara ayirip, basamak sayisini bu rakamlara üs olarak veriyoruz ve bu sayilari topluyoruz. Toplama işlemi sonucu yine ayni sayi çikiyorsa işte elimizdeki sayiya Armstrong Sayi deriz.
// . 153: 1**3+5**3+3**3 = 1 + 125 + 27 = 153
// . 370: 3**3+7**3+0**3 = 27 + 343 + 0 = 370
// . 371: 3**3+7**3+1**3 = 27 + 343 + 1 = 371
// . 407: 4**3+0**3+7**3 = 64 + 0 + 343 = 407
// . 1634: 1**4+6**4+3**4+4**4 = 1 + 1296 + 81 +256 = 1634
// . 8208
// . 9474
// . 54748
// //kullanıcıdan bir sayi al
// //let number = prompt("Bir sayi girin:");
// //let sum = 0;
// //let temp = number;
// //basamak sayısısnı bul
// let numOfDigits = number.length;
// //sayının her bir basamagını kontrol et
// while (temp > 0) {
//   let digit = temp % 10; // son basamagı al
//   sum += Math.pow(digit, numOfDigits); // basamagın basamak sayısı kadar kuvvetini al ve toplama ekle
//   temp = Math.floor(temp / 10); //bir sonraki basamaga gecmek icin sayıyı kucult
// }
// //toplam girilen sayıya esitse armstrong sayısıdır
// if (sum == number) {
//   console.log(`${number} bir Armstrong sayisidir.`);
// } else {
//   console.log(`${number} bir Armstrong sayisi degildir.`);
// }
// function reversNumber(num) {
//     var reverse = 0
//     while (num != 0) {
//         reverse =reverse * 10
//         reverse =reverse + (num%10)
//         num = Math.trunc(num/10)
//     }
//     return reverse
// }
// console.log(reversNumber(123));
console.log("*********** Armstromg ****************");
// function armstrongNumber(num) {
//     let number = num;
//     let basamak;
//     let basamakSayisi = num.toString().length;
//     let sum = 0;
//     while (num != 0) {
//         basamak = num % 10
//         sum += Math.pow(basamak, basamakSayisi)
//         num = Math.trunc(num / 10);
//     }
//     if (sum === number) {
//         return `${number} armstrong bir sayidir`
//     } else {
//        return `${number} armstrong degildir`
//     }
// }
// console.log(armstrongNumber(354))
function isArmstrongNumber(num) {
  //Sayının orjınalını saklayalım 1453
  let orjinalNumber = num;
  let digitCount = 0;
  let sum = 0;
  //Basamak sayısınız bulmak ıçın
  while (orjinalNumber !== 0) {
    orjinalNumber = Math.floor(orjinalNumber / 10); //Sayıyı 10'a bölerek basamak sayısını hesaplıyoruz
    digitCount++; //her bölmede sayıyı artırdık
  }
  // Orjınal sayıya gerı dönelım
  orjinalNumber = num;
  //sayının her bır basamagını alıp basamak sayısına göre üssünü alıp toplayalım
  while (orjinalNumber > 0) {
    let digit = orjinalNumber % 10; //son basamagı bulduk
    sum += digit ** digitCount; //Basamağın dıgıtcont kadar üsüünü ekle
    orjinalNumber = Math.floor(orjinalNumber / 10); //sayıyı bır basamak eksılt
  }
  //Sayı ıle üssü alınan basamakaların toplamını karşılaştıralım
  if (sum === num) {
    return `${num} armstrong bir sayidir`;
  } else {
    return `${num} armstrong degildir`;
  }
}
console.log(isArmstrongNumber(153));
let number1 = prompt("say");
console.log(typeof(number1));
let numOfDigits2 = number1.length;
console.log(numOfDigits2);