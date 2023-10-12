import { resolve } from "path";

/** @type {import('vite').UserConfig} */
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "json-viewer": resolve(__dirname, "json-viewer.html"),
      },
    },
  },
};
