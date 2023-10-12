const $errorEl = document.getElementById("error");
const hideClass = "opacity-0";

function showError() {
  $errorEl.classList.remove(hideClass);
}
function hideError() {
  $errorEl.classList.add(hideClass);
}
