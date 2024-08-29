/*  console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlang va kopro xato qiling", //20-30
  "uzingizga ishlashingizni boshlang", //30-40
  "siz kuchli bolgan narsalari qiling", //40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", //60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number ", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("passed here 0");

maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR", err);
  else {
    console.log("javob", data);
  }
});

console.log("passed here 1");  */

// Synchronous functionlarni qollash

// console.log("Jack Ma maslahatlari");
// const list = [
// "yaxshi talaba boling", //0-20
//   "togri boshliq tanlang va kopro xato qiling", //20-30
//   "uzingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narsalari qiling", //40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", //60
//   // ];

/* async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
} */

// then/catch

/* console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });

console.log("passed here 1"); */

// asyn/await
// async function run() {
// let javob = await maslahatBering(20);
// console.log(javob);
// javob = await maslahatBering(31);
// console.log(javob);
// javob = await maslahatBering(41);
// console.log(javob);
// }
// run();

// CALLBACK function

// function maslahatBering(a, callback) {
// if (typeof a !== "number") callback("insert a number ", null);
// else if (a <= 20) callback(null, list[0]);
// else if (a > 20 && a <= 30) callback(null, list[1]);
// else if (a > 30 && a <= 40) callback(null, list[2]);
// else if (a > 40 && a <= 50) callback(null, list[3]);
// else if (a > 50 && a <= 60) callback(null, list[4]);
// else {
//   setInterval(function () {
//     callback(null, list[5]);
//   }, 1000);
// }
// }

// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
// if (err) console.log("ERROR", err);
// else {
//   console.log("javob", data);
// }
// });

// console.log("passed here 1");

// TASK -A

// function countLetter(e, developer) {
//   let count = 0;

//   for (let i = 0; i < developer.length; i++) {
//     if (developer[i] === e) {
//       count++;
//     }
//   }

//   return count;
// }

// const result = countLetter("e", "developer");
// console.log(result);

// TASK - B;

// function countDigits(string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] >= "0" && string[i] <= "9") {
//       count++;
//     }
//   }
//   return count;
// }

// const result = countDigits("asd7bhsd3c3dff8hf2jfj9");
// console.log(result);

// Task -C;

// function checkContent(word1, word2) {
//   return word1.split("").sort().join("") === word2.split("").sort().join("");
// }
// const result = checkContent("mitgroup", "gmtiprou");
// console.log(result);

// Task -D
// class Shop {
//   constructor(non, lagmons, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmons,
//       cola: cola,
//     };
//   }

//   _getCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   qoldiq() {
//     const time = this._getCurrentTime();
//     console.log(
//       `Hozirda ${time} bor ${this.products.non} non${
//         this.products.non !== 1 ? "s" : ""
//       }, ${this.products.lagmon} lagmon${
//         this.products.lagmon !== 1 ? "s" : ""
//       }, va ${this.products.cola} cola${this.products.cola !== 1 ? "s" : ""}!`
//     );
//   }

//   sotuv(product, quantity) {
//     if (this.products[product] !== undefined) {
//       if (this.products[product] >= quantity) {
//         this.products[product] -= quantity;
//         const time = this._getCurrentTime();
//         console.log(
//           `Hozirda ${time}, sotildi ${quantity} ${product}${
//             quantity > 1 ? "s" : ""
//           }.`
//         );
//       } else {
//         console.log(
//           ` ${product} mahsuloti sotuvga yetarlimas.Mavjud: ${this.products[product]}`
//         );
//       }
//     } else {
//       console.log(`Mahsulot ${product} sotuvda mavjud emas`);
//     }
//   }

//   qabul(product, quantity) {
//     if (this.products[product] !== undefined) {
//       this.products[product] += quantity;
//       const time = this._getCurrentTime();
//       console.log(
//         `Hozirda ${time}, qabul qilingan ${quantity} ${product}${
//           quantity > 1 ? "s" : ""
//         }.`
//       );
//     } else {
//       console.log(`Mahsulot ${product} sotuvda mavjud`);
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotuv("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

// Task -E

function getReverse(word) {
  return word.split("").reverse().join("");
}

const result = getReverse("hello");
console.log(result);
