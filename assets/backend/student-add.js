// Select Group ID
const elList = document.querySelector(".groupId");
const renderProduct = (array, node) => {
  //   node.innerHTML = "";
  array.forEach((item) => {
    node.innerHTML += `
      <option>${item._id}</option>
            `;
  });
};

const getData = async () => {
  const res = await fetch("http://localhost:4000/api/group");
  const data = await res.json();
  console.log(data);
  renderProduct(data, elList);
};

getData();

const fName = document.querySelector(".fname");
const lName = document.querySelector(".lname");
const gender = document.querySelector(".gender");
const birthday = document.querySelector(".birthday");
const phone = document.querySelector(".phone");
const groupId = document.querySelector(".groupId");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const username = document.querySelector(".username");
const image = document.querySelector(".image");
const studentForm = document.querySelector(".stForm");
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("image", image.files[0]);
  formData.append("username", username.value);
  formData.append("password", password.value);
  formData.append("f_name", fName.value);
  formData.append("l_name", lName.value);
  formData.append("gender", gender.value);
  formData.append("birthdate", birthday.value);
  formData.append("email", email.value);
  formData.append("phone", phone.value);
  formData.append("group_id", groupId.value);
  console.log(formData);

  fetch("http://localhost:4000/api/student/create", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data?.message) {
        Toastify({
          text: `${data.message}`,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          positionLeft: true,
          stopOnFocus: true,
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        location.reload()
      }
      if (data?.error) {
        Toastify({
          text: `${data?.error}`,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          positionLeft: true,
          stopOnFocus: true,
          backgroundColor: "red",
        }).showToast();
      }
    })
    .catch((err) => {
      console.log(err);
      if (err?.error) {
        Toastify({
          text: `${err?.error}`,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          positionLeft: true,
          stopOnFocus: true,
          backgroundColor: "red",
        }).showToast();
      }
    });
});
