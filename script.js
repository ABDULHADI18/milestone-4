var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    // Type Assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("education");
    var graduationYearElement = document.getElementById("graduationYear");
    var experienceElement = document.getElementById("experiencein");
    var companyElement = document.getElementById("company");
    var yearsOfExperienceElement = document.getElementById("yearsOfExperience");
    var skillsElement = document.getElementById("skills");
    var descriptionElement = document.getElementById("description");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        graduationYearElement &&
        experienceElement &&
        companyElement &&
        yearsOfExperienceElement &&
        skillsElement &&
        descriptionElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var graduationYear = graduationYearElement.value;
        var experience = experienceElement.value;
        var company = companyElement.value;
        var yearsOfExperience = yearsOfExperienceElement.value;
        var skills = skillsElement.value;
        var description = descriptionElement.value;
        // picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n    <p><strong>Full Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n    <p><strong>Address:</strong> ").concat(address, " </p>\n\n    \n    <h3>Education</h3>\n    <p><strong>Education:</strong> ").concat(education, " </p>\n    <p><strong>Graduation Year:</strong> ").concat(graduationYear, " </p>\n\n    <h3>Experience</h3>\n    <p><strong>Experience In:</strong> ").concat(experience, " </p>\n    <p><strong>Company:</strong> ").concat(company, " </p>\n    <p><strong>Years of Experience:</strong> ").concat(yearsOfExperience, " </p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>Description</h3>\n    <p>").concat(description, " </p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("the resume output elements are missing");
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
