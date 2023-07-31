//* GET COURSE
async function fetchData() {
  try {
    const response = await fetch("http://localhost:4000/api/course");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
function renderTable(data) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  data.forEach((course) => {
    const tr = document.createElement("tr");

    const checkboxCell = document.createElement("td");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const classCell = document.createElement("td");
    const actionCell = document.createElement("td");

    checkboxCell.innerHTML = `
      <div class="form-check check-tables">
        <input class="form-check-input" type="checkbox" value="${course._id}">
      </div>
    `;
    idCell.textContent = course._id;
    nameCell.innerHTML = `<h2><a>${course.name}</a></h2>`;
    classCell.textContent = course.class;

    actionCell.innerHTML = `
      <div class="actions">
        <a href="javascript:;" class="btn btn-sm bg-success-light me-2">
          <i class="feather-eye"></i>
        </a>
        <a href="edit-subject.html" class="btn btn-sm bg-danger-light">
          <i class="feather-edit"></i>
        </a>
      </div>
    `;

    tr.appendChild(checkboxCell);
    tr.appendChild(idCell);
    tr.appendChild(nameCell);
    tr.appendChild(classCell);
    tr.appendChild(actionCell);

    tableBody.appendChild(tr);
  });
}

async function init() {
  const data = await fetchData();
  renderTable(data);
}

document.addEventListener("DOMContentLoaded", init);
//* GET COURSE

