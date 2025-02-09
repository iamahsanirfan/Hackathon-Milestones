// Wait for the DOM to load before running any scripts
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const preview = document.getElementById("resume-preview") as HTMLElement;
    const formContainer = document.querySelector(".form-container") as HTMLElement;
  
    // Toggle Skills Button in Preview
    const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsList = document.getElementById("skills-list") as HTMLElement;
    toggleSkillsButton.addEventListener("click", () => {
      if (skillsList.style.display === "none" || skillsList.style.display === "") {
        skillsList.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
      } else {
        skillsList.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
      }
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Retrieve input values from the form
      const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;
      const careerObjective = (document.getElementById("career-objective") as HTMLTextAreaElement).value;
      const fullName = (document.getElementById("full-name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const age = (document.getElementById("age") as HTMLInputElement).value;
      const address = (document.getElementById("address") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
      const education1 = (document.getElementById("education1") as HTMLInputElement).value;
      const education2 = (document.getElementById("education2") as HTMLInputElement).value;
      const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
      const skill2 = (document.getElementById("skill2") as HTMLInputElement).value;
      const skill3 = (document.getElementById("skill3") as HTMLInputElement).value;
      const skill4 = (document.getElementById("skill4") as HTMLInputElement).value;
      const skill5 = (document.getElementById("skill5") as HTMLInputElement).value;
      const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  
      // Validate that the email ends with "@gmail.com"
      if (!email.endsWith("@gmail.com")) {
        alert("Please enter a valid Gmail address (ending with @gmail.com).");
        return;
      }
  
      // Populate the Resume Preview with the entered values
      (document.getElementById("preview-full-name") as HTMLElement).textContent = fullName;
      (document.getElementById("preview-career-objective")!.querySelector("p") as HTMLElement).textContent = careerObjective;
      (document.getElementById("preview-email") as HTMLElement).textContent = email;
      (document.getElementById("preview-age") as HTMLElement).textContent = age;
      (document.getElementById("preview-address") as HTMLElement).textContent = address;
      (document.getElementById("preview-phone") as HTMLElement).textContent = phone;
      const previewLinkedin = document.getElementById("preview-linkedin") as HTMLAnchorElement;
      previewLinkedin.href = linkedin;
      previewLinkedin.textContent = linkedin;
      (document.getElementById("preview-education1") as HTMLElement).textContent = education1;
      (document.getElementById("preview-education2") as HTMLElement).textContent = education2;
      (document.getElementById("preview-skill1") as HTMLElement).textContent = skill1;
      (document.getElementById("preview-skill2") as HTMLElement).textContent = skill2;
      (document.getElementById("preview-skill3") as HTMLElement).textContent = skill3;
      (document.getElementById("preview-skill4") as HTMLElement).textContent = skill4;
      (document.getElementById("preview-skill5") as HTMLElement).textContent = skill5;
      (document.getElementById("preview-experience")!.querySelector("p") as HTMLElement).textContent = experience;
  
      // Process the profile picture file using FileReader (if provided)
      if (profilePictureInput.files && profilePictureInput.files[0]) {
        const file = profilePictureInput.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
          const previewImg = document.getElementById("preview-profile-img") as HTMLImageElement;
          previewImg.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        // Optionally, set a default image if no file is chosen.
        const previewImg = document.getElementById("preview-profile-img") as HTMLImageElement;
        previewImg.src = "default-profile.png";
      }
  
      // Display the resume preview and hide the form
      preview.classList.remove("hidden");
      formContainer.classList.add("hidden");
    });
  });
  