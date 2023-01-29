export default function returnHowManyArguments(...args) {
	let n = 0;
	for (let i of args) {
		n = n + 1;
	}
	return n;
}
