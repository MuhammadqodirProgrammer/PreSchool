const elList = document.querySelector('.el_list');

const renderData = (data, list = elList ) => {
	list.innerHTML = '';
	list.innerHTML = `
    <thead class="student-thread">
    <tr>
        <th>ID</th>
        <th>Item Name</th>
        <th>Item Quality</th>
        <th>Amount</th>
        <th>Purchase Source</th>
        <th>Purchase Date</th>
        <th>Purchase By</th>
    </tr>
</thead>
`;


	const tbody = document.createElement('tbody');
	list.append(tbody);


	data.forEach((el) => {
		tbody.innerHTML += `

<tr>
<td>${el.expen_id}</td>
<td>
    <h2>
        <a>${el.item_name}</a>
    </h2>
</td>
<td>${el.item_quality}</td>
<td>${el.amount}</td>
<td>${el.purchase_source}</td>
<td>${el.purchase_date}</td>
<td>${el.purchase_by}</td>
</tr>


`;
	});

	console.log(list);
};
const getData = async () => {
	const res = await fetch('http://localhost:4000/expens');
	const data = (await res.json()).message;
	console.log(data);
	renderData(data);
};

getData();
