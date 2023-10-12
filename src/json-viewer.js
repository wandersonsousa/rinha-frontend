import { toHome } from "./routing";

window.addEventListener("hashchange", (event) => {
  if (window.location.hash === "#jsonviewer") {
    if (!window.file) {
      window.location = "/";
    }
  }
});
