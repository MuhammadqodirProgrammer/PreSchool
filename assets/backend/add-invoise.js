const collectionForm = document.querySelector('.invoices-form');
const items = document.querySelector('.items');
const category = document.querySelector('.category');
const quantity = document.querySelector('.quantity');
const price = document.querySelector('.price');
const amount = document.querySelector('.amount');
const discount = document.querySelector('.discount');
const urchaseBy = document.querySelector('.urchaseBy');

collectionForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const data = {
		expen_id: items.value,
		item_name: category.value,
		item_quality: itemQuality.value,
		amount: price.value,
		purchase_amount: amount.value,
		purchase_by: urchaseBy.value,
		purchase_date: discount.value,
	};

	const res = fetch('http://localhost:4000/expens', {
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
