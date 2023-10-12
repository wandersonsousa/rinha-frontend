const $jsonTnput = document.querySelector("#json_file");

$jsonTnput?.addEventListener("change", function (event) {
  const uploadedFile = this.files[0];

  validateUploadedFile(uploadedFile);

  const path = event.target.value;
  console.log(uploadedFile);
  //C:\fakepath\giant.json
});

function validateUploadedFile(file) {
  if (!validateFileExtension(file)) return showError();

  hideError();
}

function validateFileExtension(file) {
  const validExtensions = ["application/json"];
  return validExtensions.includes(file.type);
}
