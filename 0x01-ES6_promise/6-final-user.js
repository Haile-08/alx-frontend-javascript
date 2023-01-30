import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
	const usr = {
		status: 'pending',
		value: '',
	};
	const photo = {
		status: 'pending',
		value: '',
	};
	try {
		const signup = await signUpUser(firstName, lastName);
		usr.status = 'fulfilled';
		usr.value = signup;
	}catch (err) {
		usr.status = 'rejected';
		usr.value = err.toString();
	}

	try {
		const upload = await uploadPhoto(fileName);
		photo.status = 'fulfilled';
		photo.value = upload;
	}catch (err) {
		photo.status = 'rejected';
		photo.value = err.toString();
	}

	return [usr, photo];
}
