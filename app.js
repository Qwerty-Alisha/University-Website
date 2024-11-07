const studentData = [
    { programme: "BCA", students: ["Alisha Khatoon","Aysha","Aarav Sharma", "Ananya Singh", "Rohit Kumar", "Priya Deshmukh", "Ravi Patil","Mohd.Sakib"] },
    { programme: "B.Sc.", students: ["Meera Iyer", "Aditya Nair", "Kavya Rajan", "Suraj Yadav", "Ritu Pandey","Iqra Hussain","Rekha Choudhary","Jay"] },
    { programme: "B.A.", students: ["Arjun Gupta", "Sneha Choudhary", "Harsh Jain", "Nandini Joshi", "Vivek Chauhan"] },
    { programme: "MCA", students: ["Siddharth Menon", "Shreya Das", "Vikram Reddy", "Aditi Kapoor", "Anil Sharma"] },
    { programme: "MBA", students: ["Sophia","Neha Malhotra", "Varun Mehta", "Divya Saxena", "Rahul Bhardwaj", "Payal Aggarwal","Nisha","Orhan"] },
];
function validateRegistration() {
    const name = document.getElementById("name").value.trim();
    const programme = document.getElementById("programme").value.trim();
    const serialNumber = parseInt(document.getElementById("serialNumber").value.trim());

    // Validate fields are not empty
    if (!name || !programme || !serialNumber) {
        alert("Please fill in all fields.");
        return;
    }

    // Find the selected programme in studentData
    const programmeData = studentData.find(item => item.programme === programme);

    // Check if programme exists
    if (!programmeData) {
        alert("Invalid programme selected. Please choose a valid programme.");
        return;
    }

    // Get the students of the selected programme
    const studentList = programmeData.students;

    // Validate serial number is within the range of student list
    if (serialNumber < 1 || serialNumber > studentList.length) {
        alert("Invalid serial number. Please check the number and try again.");
        return;
    }

    // Validate the name matches the student at the given serial number
    const expectedName = studentList[serialNumber - 1]; // Serial number is 1-based
    if (expectedName.toLowerCase() !== name.toLowerCase()) {
        alert("Invalid name. Please ensure the name matches the serial number.");
        return;
    }

    // If all validations pass
    alert("Registration successful!");
}

function validateFeedback() {
    const feedbackName = document.getElementById("feedbackName").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    if (!feedbackName || !feedback) {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for your feedback!");
    }
}
