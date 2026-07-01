import { defineConfig } from "vite";
import { resolve } from "path";

// Viteで複数ファイルを単一ファイルにまとめてビルドするための設定
export default defineConfig({
  build: {
    lib: {
      // index.htmlではなく明確にエントリーポイントを指定する
      entry: resolve(__dirname, "src/main.ts"),
      name: "MyBot",
      // 1つのファイルにまとめるためにIIFE形式を指定
      formats: ["iife"],
      fileName: () => "main.js",
    },
    outDir: "dist",
    // ビルド後のコードをCodinGameに提出する際に読めるように圧縮を無効化する
    minify: false,
    sourcemap: false,
  },
});
