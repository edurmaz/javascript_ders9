const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'happy'
];
const palindrome = [
  'Anna',
  'Asa',
  'civic',
  'common',
  'Kayak',
  'Level',
  'Madam',
  'Mom',
  'Noon ',
  'Rotor',
  'Sagas ',
  'Solar',
  'Stats',
  'Tenet ',
  'Wow'
];

// array.forEach(element => {  

// });
// Tekrar== Methotların içerisinde çağırdığımız fonksiyonlara callback fonksiyon denir.
// callback fonksiyon bir fonksiyonun içerisinde fonksiyon çağırmaktır.

words.forEach(function name(params) { // yazdığımız bu fonksiyon bir parametre alıp döndürebilir. 
  console.log(params)
})


for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}

words.forEach((params) => { // callback fonksiyonun ismi önemli değil isimsizde yazılabilir.
  console.log(params)     // arrow fonk bir kaç satırdan oluşacaksa süslü parantez kullanılabilir. Tek satırda yazılacaksa süslü parantez kullanılmayabilir.
})
words.forEach(params => console.log(params.toUpperCase()))

words.forEach((params) => {
  let first = params.charAt(0).toUpperCase();
  let last = params.substring(1);
  console.log(first + last)
})

// foreach'le arrayın elemanlarını tek tek alıp işlemlere tabi tutuyoruz.

//foreach for la benzer yapıda çalışıyor. bütün elemanları alıp işlem yapıyor.
//map ise alıp bize geri gönderiyor. Uymayan bir öğe varsa hata yada undifined döndürür.


let newArr1 = words.map(item => item) // map i genellikle bir değişkene bağlarız.
let newArr2 = words.map(function name(params) {  // aralarında hiç bir fark yoktur.
  return params.toUpperCase();
})

let newArr3 = words.map(function name(params) {  // aralarında hiç bir fark yoktur.
  let first = params.charAt(0).toUpperCase();
  let last = params.substring(1);
  return first + last
})
console.log(newArr3)

const findItem = palindrome.find(item => item === "Asa")
console.log(findItem)
if (findItem) {
  palindrome.push("Musa");

} console.log(palindrome)

const returnItem2 = palindrome.find(item => {
  if (item.length > 5) {
    return item
  }
})
console.log(returnItem2)

const returnItem3 = palindrome.find(item => {
  let first = item.charAt(0).toUpperCase();
  let last = item.substring(1, 2);
  let final = first + last;
  console.log(final)
  if (final === "Ci") { // konsolda gördüğümüz ilk değer olur. düzenlenmiş değer olmaz.
    return item;
  }
})
console.log(returnItem3)

const newResult = palindrome.filter(item => item.includes("a"))
console.log(newResult);

const filtered = palindrome.filter(item => !item.includes("a")) // burda !(ünlem)işareti kullanarak içermeyenleri bulabiliriz.
console.log(filtered);

const filtered2 = palindrome.filter(item => item !== "asa")  // bu şekilde de yazılan değer harici bütün değerleri gösterir.
console.log(filtered2);

const filtered3 = palindrome.filter(item => item.length < 4)  // bu şekilde de yazılan değer harici bütün değerleri gösterir.
console.log(filtered3);


// tek bir sonuç istiyorsak find methodu eğer birden fazla sonuç için filter methodu kullanırız.
// find tek sonuç döndüğü için döndüğü item string olarak dönüyor.
//filter ise döndüğü değer array olarak döner.

/*==== reduce methodu==========*/

// numberlarda kullanılıyor.
// toplama olarak kullanıyoruz.


const number = [0, 25, 99, 62, 12, 5];


const sum = number.reduce((a, b) => a + b, 0) // iki seçenekli çalışıyor (a,b)şeklinde virgülden sonra başlangıç koşulu verebiliyoruz.
// Başlangıç koşulunun üstüne ekleyerek topluyor. a sürekli üstüne eklenen parametre b ise toplanan parametredir.

console.log(sum)

let sum1 = 0;
for (let i = 0; i < number.length; i++) { // reduce ile aynı işlemi yapıyor reduce daha kolay.
  sum1 += number[i];
}
console.log(sum1)

/*=======every methodu ===========*/
// every methodu bütün değerlere bakar konsola true yada false değer verir.
// burda bütün itemleri tek tek yazdırmıyor sadece kontrol ediyoruz.

const everyItem = palindrome.every(item => item.length > 3);
console.log(everyItem);


function check(params) {
  for (let i = 0; i < params.length; i++) { // every kullanarak daha kısa bir şekilde yapabiliriz.
    if (params[i].length <= 3) {
      return false;
    }
  }
}
console.log(check(palindrome))

/*======= some methodu ==============*/
// every den farkı array içinde 1 tane istenen değer varsa onu true verir.
// every le some ın çalışma mantıkları aynı 

const someItem = palindrome.some(item => item.length > 5);
console.log(someItem)

/*==========find methodu==========*/
// find methodu istenen koşulu sağladığı zaman bulunduğu indexi bize gösterir sonraki durumlara bakmaz

const indexItem = palindrome.findIndex(item => item.length > 4)

console.log(indexItem)

/*====sort methodu =========*/
// sıralamak için kullanıyoruz.
// büyükten kuçüğe yada numaralı sıralamak istiyorsak callback fonk. ile kullanıyoruz.

const sorted = number.sort((a, b) => a - b)  // a ve b yazmamısın sebebi birbirleriyle karşılaştırmasını sağlamak için
console.log(sorted)                     // b-a yaparsak ters sıralama yapar.

const sortedLength = palindrome.sort((a, b) => a.length - b.length)  // içindeki harf uzunluğuna göre sıralama yaptık.
console.log(sortedLength)

const numbered = [0, 25,"a", 99, 62, 12, 5];

const filteredd = numbered.filter(item=> typeof item === "number");
const sorted2 = filteredd.sort((a,b) => b-a);

const res = numbered.filter(item=> typeof item === "number").sort((a,b) => b-a); // bu şekilde tek satırda hem filter ı hemde sortu yada diğer methotları kullanabiliyoruz.
console.log(res)

const karma = (item) =>{
  return item*2;
}

/*============ setInterval ========== */
// setInterval zamanlayıcı ve tekrarlayıcı olarak kullanıyoruz. Bir kodun ne zaman çalışacağını belirliyoruz.
// mili saniye olarak çalışıyor.

const date =new Date();
console.log(date)    // tarih i bu şekilde yazdırabiliyoruz.

setInterval(() => {
  console.log("set interval çalıştı.")
}, 5000);
//clearInterval() bu şekilde yazarsak interval tek sefer çalışır.

/*============== setTimeout ========*/
// geciktirici olarak kullanıyoruz.
// tek seferlik çalışıyor.
setTimeout(() => {
  console.log("settimeout çalıştı.")
}, 2000);


/*=======do while ========*/

// condition (şart)'a göre çalışıyor

while (condition) {
  console.log("çalıştı.")    // while.. koşul true ise sürekli çalışır. koşul false olana kadar
}

let i =0;
while (i<5) {
  console.log("merhaba") //  while for' a  benzetilmiş hali 
  i++
}


// do-while önce tek sefer çalışır, koşula bakar koşul true is çalışmaya devam eder false ise durur.
do {
  console.log("çalıştı")  // 
} while (false);