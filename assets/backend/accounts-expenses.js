
const collectionForm = document.querySelector('.expenses_form');
const elexpensesId = document.querySelector('.expensesId');
const elexpensesName = document.querySelector('.expensesName');
const itemQuality = document.querySelector('.itemQuality');
const feesAmount = document.querySelector('.feesAmount');
const source = document.querySelector('.source');
const urchaseDate = document.querySelector('.urchaseDate');
const urchaseBy = document.querySelector('.urchaseBy');

collectionForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const data = {
		expen_id: elexpensesId.value,
		item_name: elexpensesName.value,
		item_quality: itemQuality.value,
		amount: feesAmount.value,
		purchase_source: source.value,
		purchase_by: urchaseBy.value,
		purchase_date: urchaseDate.value,
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
                    gravity: "top", // `top` or `bottom`
                    positionLeft: true,
                     stopOnFocus: true, 
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
                  }).showToast();
			}
            if(data?.error){
                Toastify({
                    text: `${data?.error}`,
                    duration: 3000,
                    destination: 'https://github.com/apvarun/toastify-js',
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    positionLeft: true,
                     stopOnFocus: true, 
                    backgroundColor: "red"
                  }).showToast();
            }
		})
		.catch((err) => {
            if(err?.error){
                Toastify({
                    text: `${err?.error}`,
                    duration: 3000,
                    destination: 'https://github.com/apvarun/toastify-js',
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    positionLeft: true,
                     stopOnFocus: true, 
                    backgroundColor: "red"
                  }).showToast();
            }
        });
});
