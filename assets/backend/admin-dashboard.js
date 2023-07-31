const studentAmount = document.querySelector(".studentAmount")
const teacherAmount = document.querySelector(".teacherAmount")
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

getData();
getData2();


