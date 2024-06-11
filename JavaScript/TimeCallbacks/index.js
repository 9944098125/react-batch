let x = 55 - 5;
let y = 45 + 5;
const calculation = new Promise((resolve, reject) => {
	if (x === y) {
		resolve(`Resolved with success ${x + y}`);
	} else {
		reject(`Rejected with error 0`);
	}
});

calculation.then((res) => console.log(res)).catch((err) => console.log(err));
