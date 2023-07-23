const elList = document.querySelector('.el_list');

const renderData = (data, list = elList) => {
	list.innerHTML = '';
	list.innerHTML = `
    <thead class="student-thread">
     <tr>
   <th>ID</th>
   <th>Gender</th>
   <th>Name</th>
   <th>Amount</th>
   <th>Joining Date</th>
 <th class="text-end">Status</th>
   </tr>
    </thead>
`;

	const tbody = document.createElement('tbody');
	list.append(tbody);

	data.forEach((el) => {
		tbody.innerHTML += `
        <tr>
        <td>${el.s_id}</td>
        <td>
            <h2 class="table-avatar">
                <a class="avatar avatar-sm me-2"><img
                        class="avatar-img rounded-circle"
                        src="assets/img/profiles/avatar-01.jpg"
                        alt="User Image"></a>
                <a>${el.name}</a>
            </h2>
        </td>
        <td>${el.gender}</td>
        <td>${el.joining_date}</td>
        <td>$${el.amount}</td>
        <td class="text-end">
            <span class="badge badge-success">${el.status}</span>
        </td>
    </tr>


`;
	});

	console.log(list);
};
const getData = async () => {
	const res = await fetch('http://localhost:4000/salary');
	const data = (await res.json()).message;
	console.log(data);
	renderData(data);
};

getData();
