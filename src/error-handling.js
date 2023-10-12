const $errorEl = document.getElementById("error");
const hideClass = "opacity-0";

export function showError() {
  $errorEl.classList.remove(hideClass);
}
export function hideError() {
  $errorEl.classList.add(hideClass);
}
