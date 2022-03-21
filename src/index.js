import Template from "@templates/Template.js"; //@ =>> Alias ya configurados con webpack!
//Agregamos el css
import "@styles/main.css";
//Luego de crear el archivo vars.styl, lo importamos:
import "@styles/vars.styl"; //Corremos de nuevo npm run dev
console.log("Hola padre!");

(async function App() {
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();
