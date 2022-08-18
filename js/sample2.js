// 2-Misol
let a = prompt('a uchun son kiriting:');
a = Number(a);
let b = prompt('b uchun son kiriting:');
b = Number(b);
for (i = a; i <= b; i++) {
	console.log(`Son: ${i}`);
}
a < b
	? console.log(`Chiqarilgan qatorlar soni: ${b - a + 1}`)
	: console.log(
			`Siz formati to'g'ri kelmaydigan qiymat kiritdingiz!\nAvval kichik butun son so'ng esa katta butun son kiriting.`,
	  );
