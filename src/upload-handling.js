window.onload = () => {
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

    window.location = "/json-viewer.html?name=" + file.name;
  }

  function validateFileExtension(file) {
    const validExtensions = ["application/json"];
    return validExtensions.includes(file.type);
  }
};

/*
{
    "lastModified": 1697082119942,
    "lastModifiedDate": "Thu Oct 12 2023 00:41:59 GMT-0300 (Horário Padrão de Brasília) {}",
    "name": "giant.json",
    "size": 189778220,
    "type": "application/json",
    "webkitRelativePath": ""
}
 */
