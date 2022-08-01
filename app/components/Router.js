import api from "../helpers/json_api.js";
import { fetchData } from "../helpers/fetch.js";
import { ProductCard } from "./ProductCards.js";
import { Registro } from "./Registro.js";
import { SliderCard } from "./SliderCard.js";
import { Title } from "./Title.js";
import { ModalPrincipal } from "./DatosModal.js";
import { Login } from "./login.js";
import { addCarrito, PaintCarrito } from "./AddCarrito.js";
import { Contacto } from "./Contacto.js";

const d = document;
const w = window;

export async function Router() {
  document.addEventListener("click", (e) => {
    document.getElementById("cards");
    addCarrito(e);
  });

  let { pathname } = w.location;
  console.log(pathname);

  if (!pathname || pathname === "/index.html") {
    d.getElementById("root").insertAdjacentElement("afterbegin", Title());
    if (!localStorage.getItem("inactivarModal")) {
      ModalPrincipal();
    }

    await fetchData({
      url: api.DOMAIN,
      cbSucces: (json) => {
        console.log(json);
        localStorage.setItem("posts", JSON.stringify(json));
        ProductCard(json);
      },
    });

    await fetchData({
      url: api.SLIDE,
      cbSucces: (json) => {
        console.log(json);
        let html = "";
        json.forEach((slide) => (html += SliderCard(slide)));
        d.getElementById("slider").innerHTML = html;
      },
    });
  } else if (!pathname || pathname === "/carrito.html") {
  } else if (!pathname || pathname === "/registro.html") {
    d.getElementById("registro").appendChild(Registro());
  } else if (!pathname || pathname === "/login.html") {
    d.getElementById("login").appendChild(Login());
  } else if (!pathname || pathname === "/contacto.html") {
    d.getElementById("contacto").appendChild(Contacto());
  }
}
