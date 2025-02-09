document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var preview = document.getElementById("resume-preview");
    var formContainer = document.querySelector(".form-container");
    // Toggle Skills Button in Preview
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsList = document.getElementById("skills-list");
    toggleSkillsButton.addEventListener("click", function () {
        if (skillsList.style.display === "none" || skillsList.style.display === "") {
            skillsList.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        }
        else {
            skillsList.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Retrieve input values from the form
        var profilePictureInput = document.getElementById("profile-picture");
        var careerObjective = document.getElementById("career-objective").value;
        var fullName = document.getElementById("full-name").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var phone = document.getElementById("phone").value;
        var linkedin = document.getElementById("linkedin").value;
        var education1 = document.getElementById("education1").value;
        var education2 = document.getElementById("education2").value;
        var skill1 = document.getElementById("skill1").value;
        var skill2 = document.getElementById("skill2").value;
        var skill3 = document.getElementById("skill3").value;
        var skill4 = document.getElementById("skill4").value;
        var skill5 = document.getElementById("skill5").value;
        var experience = document.getElementById("experience").value;
        // Validate that the email ends with "@gmail.com"
        if (!email.endsWith("@gmail.com")) {
            alert("Please enter a valid Gmail address (ending with @gmail.com).");
            return;
        }
        // Populate the Resume Preview with the entered values
        document.getElementById("preview-full-name").textContent = fullName;
        document.getElementById("preview-career-objective").querySelector("p").textContent = careerObjective;
        document.getElementById("preview-email").textContent = email;
        document.getElementById("preview-age").textContent = age;
        document.getElementById("preview-address").textContent = address;
        document.getElementById("preview-phone").textContent = phone;
        var previewLinkedin = document.getElementById("preview-linkedin");
        previewLinkedin.href = linkedin;
        previewLinkedin.textContent = linkedin;
        document.getElementById("preview-education1").textContent = education1;
        document.getElementById("preview-education2").textContent = education2;
        document.getElementById("preview-skill1").textContent = skill1;
        document.getElementById("preview-skill2").textContent = skill2;
        document.getElementById("preview-skill3").textContent = skill3;
        document.getElementById("preview-skill4").textContent = skill4;
        document.getElementById("preview-skill5").textContent = skill5;
        document.getElementById("preview-experience").querySelector("p").textContent = experience;
        // Process the profile picture file using FileReader (if provided)
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            var file = profilePictureInput.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                var previewImg = document.getElementById("preview-profile-img");
                previewImg.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(file);
        }
        else {
            // Set a default image if no file is chosen.
            var previewImg = document.getElementById("preview-profile-img");
            previewImg.src = "default-profile.png";
        }
        // Generate shareable link based on the user's full name
        var shareableLink = "".concat(window.location.origin).concat(window.location.pathname, "?user=").concat(encodeURIComponent(fullName));
        var shareableLinkInput = document.getElementById("shareable-link");
        shareableLinkInput.value = shareableLink;
        // Display the resume preview and hide the form
        preview.classList.remove("hidden");
        formContainer.classList.add("hidden");
    });
    // Download PDF functionality using html2pdf.js
    var downloadBtn = document.getElementById("download-pdf");
    downloadBtn.addEventListener("click", function () {
        var resumeElement = document.getElementById("resume-preview");
        if (resumeElement) {
            var opt = {
                margin: 0.5,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(resumeElement).save();
        }
    });
    // Edit Resume functionality: allow user to return to the form to make changes
    var editBtn = document.getElementById("edit-resume");
    editBtn.addEventListener("click", function () {
        var preview = document.getElementById("resume-preview");
        preview.classList.add("hidden");
        var formContainer = document.querySelector(".form-container");
        formContainer.classList.remove("hidden");
    });
    // Copy Shareable Link functionality
    var copyLinkBtn = document.getElementById("copy-link");
    copyLinkBtn.addEventListener("click", function () {
        var linkInput = document.getElementById("shareable-link");
        linkInput.select();
        linkInput.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(linkInput.value)
            .then(function () {
            alert("Link copied to clipboard!");
        })
            .catch(function (err) {
            console.error("Could not copy text: ", err);
        });
    });
});
