async function fetchAndPopulateTable() {
  try {
    const response = await fetch("http://localhost:4000/api/group");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    updateTable(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function updateTable(data) {
  const tableBody = document.querySelector(".datatable tbody");

  tableBody.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <div class="form-check check-tables">
          <input class="form-check-input" type="checkbox" value="something">
        </div>
      </td>
      <td>${item._id}</td>
      <td>
        <h2>
          <a>${item.name}</a>
        </h2>
      </td>
      <td>${item.hod}</td>
      <td>${item.startedYear}</td>
      <td>${item.numOfStudents}</td>
      <td class="text-end">
        <div class="actions">
          <a href="javascript:;" class="btn btn-sm bg-success-light me-2">
            <i class="feather-eye"></i>
          </a>
          <a href="edit-department.html" class="btn btn-sm bg-danger-light">
            <i class="feather-edit"></i>
          </a>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function init() {
  fetchAndPopulateTable();
}

document.addEventListener("DOMContentLoaded", init);
