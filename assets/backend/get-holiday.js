const elList = document.querySelector('.holiday_table');

const renderData = (data, list = elList) => {
	list.innerHTML = '';
	list.innerHTML = `
    <thead class="student-thread">
    <tr>
    <th>ID</th>
    <th>Holiday Name</th>
    <th>Type</th>
    <th>Start Date</th>
    <th>End Date</th>
</tr>
    </thead>
`;

	const tbody = document.createElement('tbody');
	list.append(tbody);

	data.forEach((el) => {
		tbody.innerHTML += `
        <tr>
        <td>${el.holiday_id}</td>
        <td>
            <h2>
                <a>${el.holiday_name}</a>
            </h2>
        </td>
        <td>${el.type_holiday}</td>
        <td>${el.start_date}</td>
        <td>${el.end_date}</td>
    </tr>


`;
	});

	console.log(list);
};
const getData = async () => {
	const res = await fetch('http://localhost:4000/get/holiday');
	const data = (await res.json());
	console.log(data);
	renderData(data);
};

getData();

