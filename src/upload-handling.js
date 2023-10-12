import { hideError, showError } from "./error-handling";
import { toJsonViewer } from "./routing";

window.addEventListener("load", () => {
  const $jsonTnput = document.querySelector("#json_file");

  // clear location hash, because we are using this to determine current page
  history.replaceState(null, document.title, location.pathname + location.search);

  $jsonTnput?.addEventListener("change", function (event) {
    const uploadedFile = this.files[0];
    validateUploadedFile(uploadedFile);
  });

  function validateUploadedFile(file) {
    if (!validateFileExtension(file)) return showError();

    hideError();
    document.title = file.name + " | JsonViewer";
    const $title = document.querySelector("#file_title");
    $title.textContent = file.name;
    window.file = file;

    toJsonViewer();
  }

  function validateFileExtension(file) {
    const validExtensions = ["application/json"];
    return validExtensions.includes(file.type);
  }
});

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
