// 5-Misol
let a = prompt('1 kg konfet narxini kiriting:');
a = Number(a);
if (a > 0) {
	for (i = 1; i <= 10; i++) {
		console.log(`${i / 10}kg konfet narxi ${(i / 10) * a} so'mga teng.`);
	}
} else if (a === 0) {
	console.log('Rostan ham tekinmi konfetla?');
} else {
	console.log(
		"Konfet narxini to'g'ri kiritdingizmi? Faqatgina qiymatni o'zini kiritishingizni so'raymiz)))",
	);
}
