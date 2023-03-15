import { resolve } from 'path';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import htmlImages from 'vite-plugin-html-images';
import handlebars from 'vite-plugin-handlebars';

module.exports = defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nested: resolve(__dirname, 'src/index.html'),
        nested: resolve(__dirname, 'src/das-cafe/index.html'),
        nested: resolve(__dirname, 'src/die-herkunft/index.html'),
        nested: resolve(__dirname, 'src/shop./index.html'),
        nested: resolve(__dirname, 'src/warenkorb/index.html'),
        nested: resolve(__dirname, 'src/startseite/index.html'),
        nested: resolve(__dirname, 'src/produkt/index.html'),
        nested: resolve(__dirname, 'src/map/index.html'),
        nested: resolve(__dirname, 'src/kontakt/index.html'),
        nested: resolve(__dirname, 'src/impressum/index.html'),
        nested: resolve(__dirname, 'src/gallery/index.html'),
        nested: resolve(__dirname, 'src/form/index.html'),
        nested: resolve(__dirname, 'src/footer/index.html')
      }
    }
  },
  plugins: [
    imagetools(),
    htmlImages(),
    handlebars({partialDirectory: resolve(__dirname, 'src/components'),})
  ]
})