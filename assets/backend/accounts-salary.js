
const collectionForm = document.querySelector('.salary_form');
const elsalaryId = document.querySelector('.salaryId');
const elsalaryName = document.querySelector('.salaryName');
const gender = document.querySelector('.gender');
const feesAmount = document.querySelector('.feesAmount');
const urchaseDate = document.querySelector('.urchaseDate');
console.log(gender);
collectionForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const data = {
		s_id: elsalaryId.value,
		name: elsalaryName.value,
		gender: gender?.value,
		amount: feesAmount.value,
		joining_date: urchaseDate.value,
	};

	const res = fetch('http://localhost:4000/salary', {
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
