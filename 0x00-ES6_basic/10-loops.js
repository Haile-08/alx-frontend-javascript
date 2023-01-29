export default function appendToEachArrayValue(array, appendString) {
	const s = [];
	for (let val of array) {
		s.push(appendString + val);
	}

	return s;
}
