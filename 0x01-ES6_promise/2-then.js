export default function handleResponseFromAPI(promise) {
	const res = "Got a response from the API";
	return promise.then(()=> ({
		status: 200,
		body: 'success',
	})).catch(() => (
		new Error()
	)).finally(() => console.log(res));
}
