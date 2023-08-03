const collectionForm = document.querySelector('.exem-form');
const elname = document.querySelector('.name');
const select = document.querySelector('.select');
const subject = document.querySelector('.subject');

const fees = document.querySelector('.fees');
const start_time = document.querySelector('.start_time');
const and_time = document.querySelector('.and_time');
const event_date = document.querySelector('.event_date');

collectionForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const data = {
		exam_name: elname.value,
		clas: select.value,
		subject: subject.value,
		fees: fees.value,
		exam_date: event_date.value,
		end_time: and_time.value,
		start_time: start_time.value,
	};

	const res = fetch('http://localhost:4000/post/exemlist', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			if (data?.message) {
				Toastify({
					text: `${data.message}`,
					duration: 3000,
					destination: 'https://github.com/apvarun/toastify-js',
					newWindow: true,
					close: true,
					gravity: 'top', // `top` or `bottom`
					positionLeft: true,
					stopOnFocus: true,
					backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
				}).showToast();
			}
			if (data?.error) {
				Toastify({
					text: `${data?.error}`,
					duration: 3000,
					destination: 'https://github.com/apvarun/toastify-js',
					newWindow: true,
					close: true,
					gravity: 'top', // `top` or `bottom`
					positionLeft: true,
					stopOnFocus: true,
					backgroundColor: 'red',
				}).showToast();
			}
		})
		.catch((err) => {
			if (err?.error) {
				Toastify({
					text: `${err?.error}`,
					duration: 3000,
					destination: 'https://github.com/apvarun/toastify-js',
					newWindow: true,
					close: true,
					gravity: 'top', // `top` or `bottom`
					positionLeft: true,
					stopOnFocus: true,
					backgroundColor: 'red',
				}).showToast();
			}
		});
});
