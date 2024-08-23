import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import javascriptObfuscator from 'javascript-obfuscator';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'js/main.js',
  output: { //Mi directorio de salida
    file: "dist/bundle.js",
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    terser(),
    resolve(),
    commonjs(),
    image(),
  
    {
      name: 'obfuscator',
      generateBundle(options, bundle) {
        Object.keys(bundle).forEach(fileName => {
          const file = bundle[fileName];
          if (file.type === 'chunk') {
            file.code = javascriptObfuscator.obfuscate(file.code, {
              compact: true,
              controlFlowFlattening: true,
            }).getObfuscatedCode();
          }
        });
      }
    }
  ]
};
