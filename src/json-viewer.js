window.onload = () => {
  const $title = document.querySelector("#title");

  const urlParams = new URLSearchParams(window.location.search);
  const fileNameParam = urlParams.get("name");

  $title.textContent = fileNameParam;
};
