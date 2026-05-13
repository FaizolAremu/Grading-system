const cgpaInput = document.getElementById('cgpa');
const resultCard = document.getElementById("resultBox");

const resultHeading = document.getElementById("gradeTitle");

const resultmessage = document.getElementById("message");

const progressFill = document.getElementById("progressBar");

function checkGrade(event) {
     event.preventDefault();

    let cgpa = Number(cgpaInput.value);
    let progressWidth = (cgpa / 5) * 100;

    // Validation
    if (cgpa < 0.01 || cgpa > 5) {

        resultHeading.innerHTML = "Invalid CGPA";

        resultmessage.innerHTML =
            "Please enter a CGPA between 0.01 and 5.00";

        resultCard.style.borderColor = "#ef4444";

        progressFill.style.width = "0%";

    }

    else if (cgpa >= 4.5) {
        resultHeading.innerHTML =
            "🏆 First Class Honours";

        resultmessage.innerHTML =
            "Outstanding academic performance. Keep soaring higher 🚀";

        resultCard.style.borderColor = "#facc15";

        progressFill.style.width = `${progressWidth}%`;
    }

    else if (cgpa >= 3.5) {
        resultHeading.innerHTML =
            "🎖️ Second Class Honours (Upper Division)";

        resultmessage.innerHTML =
            "Great job! You're doing well. Keep up the good work! 💪";

        resultCard.style.borderColor = "#3b82f6";

        progressFill.style.width = `${progressWidth}%`;
    }

    else if (cgpa >= 2.5) {
        resultHeading.innerHTML =
            "🎖️ Second Class Honours (Lower Division)";

        resultmessage.innerHTML =
            "Good effort! You're on the right track. Keep pushing forward! 🚀";

        resultCard.style.borderColor = "#8b5cf6";

        progressFill.style.width = `${progressWidth}%`;
    }

    else if (cgpa >= 1.5) {
        resultHeading.innerHTML =
            "🎖️ Third Class Honours";

        resultmessage.innerHTML =
            "You've passed. Stay focused and continue improving every semester 💻";

        resultCard.style.borderColor = "#f97316";

        progressFill.style.width = `${progressWidth}%`;
    }

    else {
        resultHeading.innerHTML =
            "❌ Fail";

        resultmessage.innerHTML =
            "Don't be discouraged. Analyze your weaknesses and work harder to improve! 💪";

        resultCard.style.borderColor = "#94a3b8";

        progressFill.style.width = `${progressWidth}%`;
    }
    
}

