// // Select Group ID
const elList = document.querySelector(".tbody");
const elLis2 = document.querySelector(".gridStudents");
const renderProduct = (array, node) => {
  //   node.innerHTML = "";
  array.forEach((item) => {
    node.innerHTML += `
    <tr>
    <td>
        <div class="form-check check-tables">
            <input class="form-check-input" type="checkbox"
                value="something">
        </div>
    </td>
    <td>
        <h2 class="table-avatar">
            <span href="#"
                class="avatar avatar-sm me-2"><img
                    class="avatar-img rounded-circle"
                    src="http://localhost:4000/${item.image}"
                    alt="User Image"></span>
            <a class="singleUser" href="student-details.html">${
              item.f_name + " " + item.l_name
            }</a>
        </h2>
    </td>
    <td>${item.birthdate}</td>
    <td>${item.username}</td>
    <td>${item.phone}</td>
    <td>${item.gender}</td>
    <td class="text-end">
        <div class="actions ">
            <a href="edit-student.html" id="${
              item._id
            }" class="btn btn-sm bg-danger-light editS">
                <i class="feather-edit"></i>
            </a>
        </div>
    </td>
</tr>
            `;
  });
};

const renderProduct2 = (array, node) => {
  //   node.innerHTML = "";
  array.forEach((item) => {
    node.innerHTML += `
    <div class="col-xl-3 col-lg-4 col-md-6 d-flex">
    <div class="card">
        <div class="card-body">
            <div class="student-box flex-fill">
                <div class="student-img">
                    <a href="student-details.html">
                        <img class="img-fluid" alt="Students Info"
                            src="http://localhost:4000/${item.image}">
                    </a>
                </div>
                <div class="student-content pb-0">
                    <h5><a href="student-details.html">${
                      item.f_name + " " + item.l_name
                    }</a></h5>
                    <h6>Student</h6>
                </div>
            </div>
        </div>
    </div>
</div>
            `;
  });
};

const getData = async () => {
  const res = await fetch("http://localhost:4000/api/student");
  const data = await res.json();
  console.log(data);

  elList ? renderProduct(data, elList) : "";
  elLis2 ? renderProduct2(data, elLis2) : "";

  const singleUser = document.querySelectorAll(".singleUser");
  singleUser.forEach((item) => {
    console.log(item.innerHTML);
    item.addEventListener("click", async () => {
      console.log(item.innerHTML);
      data.filter((i) => {
        const name = i.f_name + " " + i.l_name;
        if (name == item.innerHTML) {
          localStorage.setItem("SingleStudentID", i._id);
        }
      });
    });
  });
  const editStudent = document.querySelectorAll(".editS");
  editStudent.forEach((item) => {
    item.addEventListener("click", async () => {
    console.log(item.id);
    data.filter((i) => {
      if (i._id == item.id) {
        localStorage.setItem("SingleStudentID", i._id);
      }
    });
    });
  });
};

getData();
