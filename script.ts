document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;

    // Type Assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const graduationYearElement = document.getElementById(
      "graduationYear"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experiencein"
    ) as HTMLInputElement;
    const companyElement = document.getElementById(
      "company"
    ) as HTMLInputElement;
    const yearsOfExperienceElement = document.getElementById(
      "yearsOfExperience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;
    const descriptionElement = document.getElementById(
      "description"
    ) as HTMLTextAreaElement;

    if (
      profilePictureInput &&
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
      descriptionElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const education = educationElement.value;
      const graduationYear = graduationYearElement.value;
      const experience = experienceElement.value;
      const company = companyElement.value;
      const yearsOfExperience = yearsOfExperienceElement.value;
      const skills = skillsElement.value;
      const description = descriptionElement.value;

      // picture elements
      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      // Create resume output
      const resumeOutput = `
    <h2>Resume</h2>
    ${
      profilePictureURL
        ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
        : ""
    }
    <p><strong>Full Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone Number:</strong> ${phone} </p>
    <p><strong>Address:</strong> ${address} </p>

    
    <h3>Education</h3>
    <p><strong>Education:</strong> ${education} </p>
    <p><strong>Graduation Year:</strong> ${graduationYear} </p>

    <h3>Experience</h3>
    <p><strong>Experience In:</strong> ${experience} </p>
    <p><strong>Company:</strong> ${company} </p>
    <p><strong>Years of Experience:</strong> ${yearsOfExperience} </p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Description</h3>
    <p>${description} </p>
    `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      } else {
        console.error("the resume output elements are missing");
      }
    } else {
      console.error("one or more output elements are missing");
    }
  });
