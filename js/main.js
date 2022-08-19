// let setOfNumbers = [
// 	'1',
// 	'2',
// 	'3',
// 	'4',
// 	'5',
// 	'6',
// 	'7',
// 	'8',
// 	'9',
// 	'10',
// 	'11',
// 	'12',
// 	'13',
// 	'14',
// ];

// let randomNumber =
// 	setOfNumbers[Math.floor(Math.random() * setOfNumbers.length)];
// console.log(randomNumber);

/*let number = prompt("Siz hohlagan son kiritishingizni so'raymiz:");

son = Number(number);

for (let i = 0; i <= son; i++) {
	console.log('Sizning soningiz', i);
}*/

/*let number = prompt('Istagan soningizni kiriting:');
number = Number(number); */

/*for (i = 0; i <= number; i++) {
	if (i & (2 === 0)) {
		console.log(`${i} - juft son`);
	} else {
		console.log(`${i} - toq son`);
	}
}*/

/*for (let i = 0; i <= number; i++) {
	i % 2 === 0
		? console.log(`${i} - juft son`)
		: console.log(`${i} - toq son`);
} */

//Local storage 5mb gacha malumot qabul qiladi, local storagedagi malumotlar komp yoki browser yangilanganda yoki ochganda malumotlar ochib ketmaydi.

//Session storage 5mb gacha, o'chib ketadi

let a = prompt('Istalgan son kiriting:');
a = Number(a);
console.log(`Siz kiritgan birinchi son: ${a}`);

for (i = 0; true; i++) {
	let b = prompt('Yana son kiriting:');
	b = Number(b);
	if (b > 0 || b < 0) {
		console.log(`Siz kiritgan son ${b}`);
		a += b;
		console.log(`Barcha oldingi sonlar yig'indisi: ${a}`);
	} else {
		break;
	}
}
