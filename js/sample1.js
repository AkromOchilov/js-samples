// 1-Misol
let k = prompt("Chiqarilishi kerak bo'lgan sonni kiriting:");
k = Number(k);
let n = prompt('Kiritilgan son nechi marotaba chiqishini istaysiz?');
n = Number(n);
if (n > 0) {
	for (i = 1; i <= n; i++) {
		console.log(`Siz kiritishni istagan son: ${k}`);
	}
}
