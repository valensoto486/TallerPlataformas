import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import javascriptObfuscator from 'javascript-obfuscator';
import html from '@rollup/plugin-html';

export default {
  input: {
    contact: 'js/contact.js',
    darkModeAbout: 'js/darkMode_about.js',
    darkModeContact: 'js/darkMode_contact.js',
    darkModelogin: 'js/darkMode_login.js',
    darkModeRegister: 'js/darkMode_register.js',
    darkMode: 'js/darkMode.js',
    idioma: 'js/idioma.js',
    idiomaEspañol: 'js/idioma/es.js',
    idiomaIngles: 'js/idioma/en.js',
    login: 'js/login.js',
    main: 'js/main.js',
    register: 'js/register.js',
    storage: 'js/main.js',
    
  },
  output: {
    file: 'dist/bundle.js', //Genera mi archivo bundle :)
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    terser(),
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
