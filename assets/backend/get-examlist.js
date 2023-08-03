const elList = document.querySelector('.el-exem');

const renderData = (data, list = elList) => {
	list.innerHTML = '';
	list.innerHTML = `
    <thead class="student-thread">
    <tr>
    <th>Exam Name</th>
    <th>Class</th>
    <th>Subject</th>
    <th>Start Time</th>
    <th>End Time</th>
    <th>Date</th>
    <th class="text-end">Action</th>
</tr>
    </thead>
`;

	const tbody = document.createElement('tbody');
	list.append(tbody);

	data.forEach((el) => {
		tbody.innerHTML += `
        <tr>
        <td>
            <h2>
                <a>${el.exam_name}</a>
            </h2>
        </td>
        <td>${el.clas}</td>
        <td>${el.subject}</td>
        <td>${el.start_time}</td>
        <td>${el.end_time}</td>
        <td>${el.exam_date}</td>
        <td class="text-end">
            <div class="actions">
                <a href="javascript:;" class="btn btn-sm bg-success-light me-2">
                    <i class="feather-eye"></i>
                </a>
                <a href="edit-exam.html" class="btn btn-sm bg-danger-light">
                    <i class="feather-edit"></i>
                </a>
            </div>
        </td>
    </tr>

`;
	});

	console.log(list);
};
const getData = async () => {
	const res = await fetch('http://localhost:4000/get/exemlist');
	const data = (await res.json());
	console.log(data);
	renderData(data);
};

getData();

