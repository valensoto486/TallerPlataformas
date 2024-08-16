import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import url from 'rollup-plugin-url';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    postcss({
      extract: 'dist/styles.css',
    }),
    resolve(),
    commonjs(),
    terser(),
    image(),
    url({
      limit: 10 * 1024, // Convertir archivos menores a 10kb a URLs de datos
      include: ['**/*.png', '**/*.jpg', '**/*.gif'],
      emitFiles: true
    })
  ]
};
