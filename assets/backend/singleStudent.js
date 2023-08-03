const StudentId = localStorage.getItem("SingleStudentID");
const elList = document.querySelector(".singleStudentCard");
const fName = document.querySelector(".editfname");
const lName = document.querySelector(".editlname");
const gender = document.querySelector(".editgender");
const birthday = document.querySelector(".editbirthday");
const phone = document.querySelector(".editphone");
const groupId = document.querySelector(".editgroupId");
const username = document.querySelector(".editusername");
const email = document.querySelector(".editemail");
const password = document.querySelector(".editpassword");
const image = document.querySelector(".editimage");
const editStudentForm = document.querySelector(".editFormS");
const renderProduct = (array, node) => {
  //   node.innerHTML = "";
  array.forEach((item) => {
    node.innerHTML += `
    <div class="row">
    <div class="col-md-12">
        <div class="about-info">
            <h4>Profile <span><a href="javascript:;"><i
                            class="feather-more-vertical"></i></a></span></h4>
        </div>
        <div class="student-profile-head">
            <div class="profile-bg-img">
                <img src="assets/img/profile-bg.jpg" alt="Profile">
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="profile-user-box">
                        <div class="profile-user-img">
                            <img src="http://localhost:4000/${
                              item.image
                            }" alt="Profile">
  
                        </div>
                        <div class="names-profiles">
                            <h4>${item.f_name + " " + item.l_name}</h4>
                            <h5>Student</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 d-flex align-items-center">
                    <div class="follow-group">
                        <div class="students-follows">
                            <h5>Followers</h5>
                            <h4>2850</h4>
                        </div>
                        <div class="students-follows">
                            <h5>Followers</h5>
                            <h4>2850</h4>
                        </div>
                        <div class="students-follows">
                            <h5>Followers</h5>
                            <h4>2850</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 d-flex align-items-center">
                    <div class="follow-btn-group">
                        <button type="submit" class="btn btn-info follow-btns">Follow</button>
                        <button type="submit" class="btn btn-info message-btns">Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-4">
        <div class="student-personals-grp">
            <div class="card">
                <div class="card-body">
                    <div class="heading-detail">
                        <h4>Personal Details :</h4>
                    </div>
                    <div class="personal-activity">
                        <div class="personal-icons">
                            <i class="feather-user"></i>
                        </div>
                        <div class="views-personal">
                            <h4>Full Name</h4>
                            <h5>${item.f_name + " " + item.l_name}</h5>
                        </div>
                    </div>
                    <div class="personal-activity">
                        <div class="personal-icons">
                            <i class="feather-phone-call"></i>
                        </div>
                        <div class="views-personal">
                            <h4>Mobile</h4>
                            <h5>+${item.phone}</h5>
                        </div>
                    </div>
                    <div class="personal-activity">
                        <div class="personal-icons">
                            <i class="feather-mail"></i>
                        </div>
                        <div class="views-personal">
                            <h4>Email</h4>
                            <h5>${item.email}</h5>
                        </div>
                    </div>
                    <div class="personal-activity">
                        <div class="personal-icons">
                            <i class="feather-lock"></i>
                        </div>
                        <div class="views-personal">
                            <h4>Password</h4>
                            <h5>${item.password}</h5>
                        </div>
                    </div>
                    <div class="personal-activity">
                        <div class="personal-icons">
                            <i class="feather-user"></i>
                        </div>
                        <div class="views-personal">
                            <h4>Gender</h4>
                            <h5>${item.gender}</h5>
                        </div>
                    </div>
                    <div class="personal-activity">
                        <div class="personal-icons">
                            <i class="feather-calendar"></i>
                        </div>
                        <div class="views-personal">
                            <h4>Date of Birth</h4>
                            <h5>${item.birthdate}</h5>
                        </div>
                    </div>
                    <div class="personal-activity">
                        <div class="personal-icons">
                            <i class="feather-italic"></i>
                        </div>
                        <div class="views-personal">
                            <h4>Language</h4>
                            <h5>English, Uzbek, Russian</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="student-personals-grp">
            <div class="card mb-0">
                <div class="card-body">
                    <div class="heading-detail">
                        <h4>Skills:</h4>
                    </div>
                    <div class="skill-blk">
                        <div class="skill-statistics">
                            <div class="skills-head">
                                <h5>Photoshop</h5>
                                <p>90%</p>
                            </div>
                            <div class="progress mb-0">
                                <div class="progress-bar bg-photoshop" role="progressbar"
                                    style="width: 90%" aria-valuenow="90" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill-statistics">
                            <div class="skills-head">
                                <h5>Code editor</h5>
                                <p>75%</p>
                            </div>
                            <div class="progress mb-0">
                                <div class="progress-bar bg-editor" role="progressbar"
                                    style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill-statistics mb-0">
                            <div class="skills-head">
                                <h5>Illustrator</h5>
                                <p>95%</p>
                            </div>
                            <div class="progress mb-0">
                                <div class="progress-bar bg-illustrator" role="progressbar"
                                    style="width: 95%" aria-valuenow="95" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-8">
        <div class="student-personals-grp">
            <div class="card mb-0">
                <div class="card-body">
                    <div class="heading-detail">
                        <h4>About Me</h4>
                    </div>
                    <div class="hello-park">
                        <h5>Hello I am Daisy Parks</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur officia deserunt mollit anim id est laborum.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                    <div class="hello-park">
                        <h5>Education</h5>
                        <div class="educate-year">
                            <h6>2008 - 2009</h6>
                            <p>Secondary Schooling at xyz school of secondary education, Mumbai.
                            </p>
                        </div>
                        <div class="educate-year">
                            <h6>2011 - 2012</h6>
                            <p>Higher Secondary Schooling at xyz school of higher secondary
                                education, Mumbai.</p>
                        </div>
                        <div class="educate-year">
                            <h6>2012 - 2015</h6>
                            <p>Bachelor of Science at Abc College of Art and Science, Chennai.
                            </p>
                        </div>
                        <div class="educate-year">
                            <h6>2015 - 2017</h6>
                            <p class="mb-0">Master of Science at Cdm College of Engineering and
                                Technology, Pune.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
              `;
  });
};
const renderProduct2 = (array, node) => {
  //   node.innerHTML = "";
  array.forEach((item) => {
    node.innerHTML += `
        <option>${item._id}</option>
              `;
  });
};

const getData2 = async () => {
  const res = await fetch("http://localhost:4000/api/group");
  const data = await res.json();
  console.log(data);
  groupId ? renderProduct2(data, groupId) : "";
};

getData2();

const getData = async () => {
  const res = await fetch("http://localhost:4000/api/student");
  
  const data = await res.json();
  
  const SingleData = data.filter((item) => item._id === StudentId);
  console.log(SingleData);
  fName? fName.value = SingleData[0].f_name:"";
  lName? lName.value = SingleData[0].l_name:"";
  gender? gender.options[gender.selectedIndex].value = SingleData[0].gender: "";
  birthday? birthday.value = SingleData[0].birthdate:"";
  phone? phone.value = SingleData[0].phone:"";
  groupId? groupId.options[groupId.selectedIndex].value = SingleData[0].groupId: "";
  username? username.value = SingleData[0].username:"";
  email? email.value = SingleData[0].email:"";
  password? password.value = SingleData[0].password:"";
  elList ? renderProduct(SingleData, elList) : "";

};

getData();



editStudentForm.addEventListener("submit", (e) => {
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

  fetch("http://localhost:4000/api/student/edit/" + StudentId, {
    method: "PUT",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data?.success) {
        Toastify({
          text: `Successfully edited`,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          positionLeft: true,
          stopOnFocus: true,
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        location.reload();
      }
      if (data?.error) {
        Toastify({
          text: `Failed to edit`,
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
          text: `Failed to edit`,
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
