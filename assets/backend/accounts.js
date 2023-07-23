console.log('bismillah');

const collectionForm = document.querySelector('.collection_form');
const elStudentId = document.querySelector('.studentId');
const elStudentName = document.querySelector('.studentName');
const selectGender = document.querySelector('.studentGender');
const selectFees = document.querySelector('.feesTypes');
const feesAmount = document.querySelector('.feesAmount');
const paidDate = document.querySelector('.paidDate');

collectionForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const data = {
		fee_id: elStudentId.value,
		name: elStudentName.value,
		gender: selectGender.value,
		fees_type: selectFees.value,
		amount: feesAmount.value,
		// paid_date: paidDate.value,
	};

	const res = fetch('http://localhost:4000/fees', {
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
