// Dynamically set the current year
const currentYearSpan = document.getElementById("currentYear");
currentYearSpan.textContent = new Date().getFullYear();

// Dynamically set the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Update: ${document.lastModified}`;

// Course data
const courses = [
  { code: "CSE 110", name: "Programming Basics", completed: true },
  { code: "WDD 130", name: "Web Fundamentals", completed: true },
  { code: "CSE 210", name: "Data Structures", completed: false },
  { code: "WDD 131", name: "Responsive Web Design", completed: false },
  { code: "CSE 111", name: "Algorithms", completed: false },
  { code: "WDD 231", name: "Front-End Frameworks", completed: false }
];

// Display courses dynamically
const coursesContainer = document.getElementById("courses");

function displayCourses(filter = "all") {
  coursesContainer.innerHTML = "";
  const filteredCourses = courses.filter(course =>
    filter === "all" ? true : course.code.startsWith(filter)
  );
  filteredCourses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.className = `course-card ${course.completed ? "completed" : ""}`;
    courseCard.textContent = `${course.code} - ${course.name}`;
    coursesContainer.appendChild(courseCard);
  });
}

// Filter buttons
document.getElementById("all").addEventListener("click", () => displayCourses("all"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));

// Initial load
displayCourses();


// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select the hamburger button and the nav menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Add a click event listener to the hamburger button
  hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav menu
    navMenu.classList.toggle('active');
  });
});



