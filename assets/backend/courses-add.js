//* POST COURSE
async function createCourse(courseData) {
  try {
    const response = await fetch("http://localhost:4000/api/course/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating course:", error);
    return null;
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  const form = document.querySelector("form");
  const subjectID = document.getElementById("subjectId").value;
  const subjectName = document.getElementById("subjectName").value;
  const subjectClass = document.getElementById("subjectClass").value;

  if (!subjectID || !subjectName || !subjectClass) {
    alert("Please fill in all required fields.");
    return;
  }

  const courseData = {
    id: subjectID,
    name: subjectName,
    class: subjectClass,
  };

  const newCourse = await createCourse(courseData);
  if (newCourse) {
    alert("Course created successfully!");

    form.reset();
  }
}

document.addEventListener("submit", handleSubmit);
//* POST COURSE
