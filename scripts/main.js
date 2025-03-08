// Dynamically set the current year
const currentYearSpan = document.getElementById("currentYear");
currentYearSpan.textContent = new Date().getFullYear();

// Dynamically set the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Update: ${document.lastModified}`;

