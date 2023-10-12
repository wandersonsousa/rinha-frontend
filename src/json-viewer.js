const urlParams = new URLSearchParams(window.location.search);
const fileNameParam = urlParams.get("name");
document.title = fileNameParam + " | JsonViewer";

window.onload = () => {
  const $title = document.querySelector("#title");

  $title.textContent = fileNameParam;
};
