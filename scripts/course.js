// Navigation Menu Toggle
document.getElementById('menu-button').addEventListener('click', function() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('open');
});

// Dynamic Year and Last Modified Date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Course Data and Filtering
const courses = [
    { code: 'CSE110', name: 'Programming Building Blocks', credits: 3, completed: true },
    { code: 'WDD130', name: 'Web Fundamentals', credits: 3, completed: true },
    { code: 'CSE111', name: 'Programming with Functions', credits: 3, completed: false },
    { code: 'CSE210', name: 'Programming with Classes', credits: 3, completed: false },
    { code: 'WDD131', name: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { code: 'WDD231', name: 'Web Frontend Development', credits: 3, completed: false }
];

function displayCourses(filter = 'all') {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';
    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.code.startsWith(filter));
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.textContent = `${course.code}: ${course.name} (${course.credits} credits)`;
        courseDiv.style.color = course.completed ? 'green' : 'red';
        courseList.appendChild(courseDiv);
    });
}

// Event Listeners for Course Filter Buttons
document.getElementById('all-courses').addEventListener('click', () => displayCourses('all'));
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses('WDD'));
document.getElementById('cse-courses').addEventListener('click', () => displayCourses('CSE'));

// Initial Display of Courses
displayCourses();