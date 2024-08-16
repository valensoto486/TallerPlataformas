import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import less from 'rollup-plugin-less';
import image from '@rollup/plugin-image';
import url from 'rollup-plugin-url';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/bundle.js', //Genera mi archivo bundle :)
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    less({
        output: 'dist/styles.css', //Genera un archivo css
        compress: true, //Para Minimizar el CSS
        sourceMap: true, // Generar mapa de origen para el CSS
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
