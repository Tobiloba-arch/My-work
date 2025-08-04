document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector(".edit-button");
  const addImageBtn = document.querySelector(".add-image-button");
  const profileImage = document.querySelector(".profile-image");
  const inputs = document.querySelectorAll(".profile-info input");

  let isEditing = false;

  // Initially disable input fields (view mode)
  inputs.forEach((input) => (input.disabled = true));

  // Toggle edit/view mode
  editBtn.addEventListener("click", () => {
    isEditing = !isEditing;

    inputs.forEach((input) => (input.disabled = !isEditing));

    editBtn.textContent = isEditing ? "Save" : "Edit";

    if (!isEditing) {
      // Here you can add save functionality, like sending data to a server
      alert("Profile saved!");
    }
  });

  // Handle Add image button click
  addImageBtn.addEventListener("click", () => {
    // Create a hidden file input to upload image

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    // Trigger file dialog
    fileInput.click();
  });
});
