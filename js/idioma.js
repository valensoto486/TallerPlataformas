import Polyglot from 'node-polyglot';
import english from "./idioma/en";
import espanol from "./idioma/es";

<script src="https://cdn.jsdelivr.net/npm/node-polyglot@2.4.0/dist/polyglot.min.js"></script>

let polyglot;
let btn_es, btn_en;

window.onload = function() {
  btn_en = document.getElementById("btn_en");
  btn_es = document.getElementById("btn_es");
  control_idioma();
  btn_en.addEventListener("click",actualizarIdioma);
  btn_es.addEventListener("click",actualizarIdioma);
}
function actualizarIdioma(event){
  cambiarIdioma(event.target.attributes[1].nodeValue);
}
function control_idioma(){
    polyglot = new Polyglot();
    polyglot.extend(getLocale());
    cargarTextos();
}

function cambiarIdioma(locale){
  if(locale == "en")
  {
      polyglot.locale("en");
      polyglot.extend(english);
  }  
  if(locale == "es")
  {
      polyglot.locale("es");
      polyglot.extend(espanol);
  }  
  cargarTextos();
}

function isSpanish(){
    // Define the users location with the object the browser provides for you
    const userLanguage = navigator.language;
    // Stores the other language you support
    const spanish = "es";

    return userLanguage.includes(spanish);
}

// Locale function - gets the users language preferences
function getLocale() {
    
    // Define the language object you'll be returning
    let languageObj;

    if (isSpanish()) {
      languageObj = espanol;
    } else {
      languageObj = english;
    }

    return languageObj;
  }

  function cargarTextos(){
    
    try{
      document.getElementById("menu_1").innerHTML = polyglot.t("menu_1");
      document.getElementById("menu_2").innerHTML = polyglot.t("menu_2");
      document.getElementById("menu_3").innerHTML = polyglot.t("menu_3");
      document.getElementById("menu_4").innerHTML = polyglot.t("menu_4");
      document.getElementById("menu_5").innerHTML = polyglot.t("menu_5");
      document.getElementById("formulario_1").innerHTML = polyglot.t("formulario_1");
      document.getElementById("formulario_2").innerHTML = polyglot.t("formulario_2");
      document.getElementById("formulario_3").innerHTML = polyglot.t("formulario_3");
      document.getElementById("formulario_4").innerHTML = polyglot.t("formulario_4");
      document.getElementById("beneficios_1").innerHTML = polyglot.t("beneficios_1");
      document.getElementById("beneficios_2").innerHTML = polyglot.t("beneficios_2");
      document.getElementById("footer_1").innerHTML = polyglot.t("footer_1");
      document.getElementById("footer_2").innerHTML = polyglot.t("footer_2");
      document.getElementById("footer_3").innerHTML = polyglot.t("footer_3");
      document.getElementById("footer_4").innerHTML = polyglot.t("footer_4");
      document.getElementById("contactenos_1").innerHTML = polyglot.t("contactenos_1");
      document.getElementById("contactenos_2").innerHTML = polyglot.t("contactenos_2");
      document.getElementById("contactenos_3").innerHTML = polyglot.t("contactenos_3");
      document.getElementById("contactenos_4").innerHTML = polyglot.t("contactenos_4");
      document.getElementById("contactenos_5").innerHTML = polyglot.t("contactenos_5");
      document.getElementById("contactenos_6").innerHTML = polyglot.t("contactenos_6");
      document.getElementById("contactenos_7").innerHTML = polyglot.t("contactenos_7");
      document.getElementById("contactenos_8").innerHTML = polyglot.t("contactenos_8");
      document.getElementById("contactenos_9").innerHTML = polyglot.t("contactenos_9");
      document.getElementById("about_1").innerHTML = polyglot.t("about_1");
      document.getElementById("about_2").innerHTML = polyglot.t("about_2");
      document.getElementById("about_3").innerHTML = polyglot.t("about_3");
      document.getElementById("about_4").innerHTML = polyglot.t("about_4");
      document.getElementById("about_5").innerHTML = polyglot.t("about_5");
      document.getElementById("about_6").innerHTML = polyglot.t("about_6");
      document.getElementById("about_7").innerHTML = polyglot.t("about_7");
      document.getElementById("about_8").innerHTML = polyglot.t("about_8");
      document.getElementById("about_9").innerHTML = polyglot.t("about_9");
      document.getElementById("about_10").innerHTML = polyglot.t("about_10");
      document.getElementById("about_11").innerHTML = polyglot.t("about_11");
      document.getElementById("about_12").innerHTML = polyglot.t("about_12");
      document.getElementById("about_13").innerHTML = polyglot.t("about_13");
    }catch(e){
      console.warn("Polyglot",e);
    }
    

    
  }

  export {control_idioma,cambiarIdioma,isSpanish};