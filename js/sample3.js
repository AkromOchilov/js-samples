// 3-Misol
let a = prompt('Istalgan a uchun butun son kiriting:');
a = Number(a);
let b = prompt('Istalgan b uchun butun son kiriting:');
b = Number(b);
if (a < b) {
	for (i = --b; i > a; i--) {
		console.log(`chiqarilayotgan son ${i}`);
	}
	console.log(`Chiqarilgan qatorlar soni: ${b - a}`);
} else {
	console.log(
		`Siz formati to'g'ri kelmaydigan qiymat kiritdingiz!\nAvval kichik butun son so'ng esa katta butun son kiriting.`,
	);
}
