import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"
import svgrPlugin from "vite-plugin-svgr"
import checker from "vite-plugin-checker"
import { createHtmlPlugin } from "vite-plugin-html"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@workers": path.resolve(__dirname, "./src/workers"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  envDir: "./environments",
  plugins: [
    react({}),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options)
      },
    }),
    createHtmlPlugin({}),
    checker({
      typescript: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: "dashes",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: {},
    },
  },
})
