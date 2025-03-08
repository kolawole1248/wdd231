// Dynamically set the current year
const currentYearSpan = document.getElementById("currentYear");
currentYearSpan.textContent = new Date().getFullYear();

// Dynamically set the current year
const currentYearSpan = document.getElementById("currentYear");
currentYearSpan.textContent = new Date().getFullYear();

// Dynamically set the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Update: ${document.lastModified}`;

// Course data
const courses = [
  { code: "CSE 110", name: "Programming Basics", credits: 3, completed: true },
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "CSE 210", name: "Data Structures", credits: 3, completed: false },
  { code: "WDD 131", name: "Responsive Web Design", credits: 2, completed: false },
  { code: "CSE 111", name: "Algorithms", credits: 3, completed: false },
  { code: "WDD 231", name: "Front-End Frameworks", credits: 3, completed: false }
];

// Display courses dynamically
const coursesContainer = document.getElementById("courses");
const totalCreditsSpan = document.getElementById("totalCredits");

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

  // Calculate total credits
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsSpan.textContent = totalCredits;
}

// Filter buttons
document.getElementById("all").addEventListener("click", () => displayCourses("all"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));

// Initial load
displayCourses();

// Responsive navigation
document.getElementById('hamburger').addEventListener('click', () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
});