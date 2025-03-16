// Sample Data (Replace this with actual data from a database later)
const jobs = [
    { company: "Google", role: "Software Engineer", location: "Bangalore", deadline: "March 30, 2025" },
    { company: "Microsoft", role: "Data Analyst", location: "Hyderabad", deadline: "April 10, 2025" },
    { company: "Amazon", role: "Cloud Engineer", location: "Mumbai", deadline: "April 15, 2025" }
];

const internships = [
    { company: "TCS", role: "Web Developer Intern", location: "Pune", deadline: "March 25, 2025" },
    { company: "Infosys", role: "AI Intern", location: "Chennai", deadline: "April 5, 2025" }
];

// Function to Load Jobs Dynamically
function loadJobs() {
    const jobList = document.getElementById("job-list");
    jobs.forEach(job => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${job.company}</strong> - ${job.role} <br> 📍 ${job.location} | 🕒 Deadline: ${job.deadline}`;
        jobList.appendChild(li);
    });
}

// Function to Load Internships Dynamically
function loadInternships() {
    const internshipList = document.getElementById("internship-list");
    internships.forEach(internship => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${internship.company}</strong> - ${internship.role} <br> 📍 ${internship.location} | 🕒 Deadline: ${internship.deadline}`;
        internshipList.appendChild(li);
    });
}

// Load Data on Page Load
window.onload = function () {
    loadJobs();
    loadInternships();
};
