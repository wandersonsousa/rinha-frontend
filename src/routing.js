export function toJsonViewer() {
  window.location.hash = "jsonviewer";
  const $home = document.getElementById("home_page");
  $home.style.display = "none";

  const $jsonviewer = document.getElementById("jsonviewer_page");
  $jsonviewer.style.display = "flex";
}

export function toHome() {
  const $home = document.getElementById("home_page");
  $home.style.display = "flex";

  const $jsonviewer = document.getElementById("jsonviewer_page");
  $jsonviewer.style.display = "none";
}
