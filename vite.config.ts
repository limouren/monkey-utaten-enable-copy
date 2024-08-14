import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://utaten.com/apple-touch-icon-precomposed.png",
        namespace: "npm/vite-plugin-monkey",
        match: ["https://utaten.com/*"],
      },
    }),
  ],
});
