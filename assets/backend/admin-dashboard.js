const studentAmount = document.querySelector(".studentAmount")
const teacherAmount = document.querySelector(".teacherAmount")
const groupAmount = document.querySelector(".groupAmount")
const courceAmount = document.querySelector(".courceAmount")
const getData = async () => {
  const res = await fetch("http://localhost:4000/api/student");
  const data = (await res.json());
  console.log(data);
  studentAmount.innerHTML = data.length
};

const getData2 = async () => {
  const res = await fetch("http://localhost:4000/api/teacher");
  const data = (await res.json());
  console.log(data);
  teacherAmount.innerHTML = data.length
};

const getData3 = async () => {
  const res = await fetch("http://localhost:4000/api/group");
  const data = (await res.json());
  console.log(data);
  groupAmount.innerHTML = data.length
};

const getData4 = async () => {
  const res = await fetch("http://localhost:4000/api/course");
  const data = (await res.json());
  console.log(data);
  courceAmount.innerHTML = data.length
};

getData();
getData2();
getData3();
getData4();


