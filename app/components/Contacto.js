export function Contacto() {
  const $contacto = document.createElement("section");
  $contacto.classList.add("container", "contact");
  $contacto.innerHTML = ` 

            <h2 class="section-title-card">¡Hola! ¿Hablamos?</h2>
            <div class="sub-title-contact container">
                <p>Merximport es la web de los apasionados del camping, outdoor y el deporte al aire
                    libre y no sería nada sin ti.
                    Cuéntanos tus lugares favoritos donde realizar tus aventuras</p>
            </div>
            <article class="contact-cards">
                <aside class="contact-card box-shadow-1">
                    <a class="icon" href="#"><i class="fa-solid fa-house"></i></a>
                    <h5>UBICACIÓN</h5>
                    <small class="social-media">Colombia D.C</i>, BGTA, Colombia</small>
                </aside>
                <aside class="contact-card box-shadow-1">
                    <a class="icon" href="#"><i class="fa-solid fa-envelope"></i></a>
                    <h5>EMAIL</h5>
                    <small class="social-media"><a href="mailto:hola@merximport.com">xxx@merximport.com</a></small>
                </aside>
                <aside class="contact-card box-shadow-1">
                    <a class="icon" href="·"><i class="fa-solid fa-hashtag"></i></a>
                    <h5>SOCIAL MEDIA</h5>
                    <small class="social-media">
                        <a href="https://twitter.com/" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624	C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003	c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z" />
                                <circle cx="16.806" cy="7.207" r="1.078" />
                                <path
                                    d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42	c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111	c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71	c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45	c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633	c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311	c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311	c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654	c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712	c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055	c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669	c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z" />
                            </svg>
                        </a>
                    </small>
                </aside>
            </article>
            <!-- Formulario de contacto -->
            <form class="contact-form box-shadow-1 section">
                <input type="text" name="name" placeholder="Ingresa tu nombre *"
                    title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                    required>
                <input type="email" name="email" placeholder="Ingresa tu correo *" title="Email incorrecto"
                    pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
                <textarea name="comments" cols="50" rows="10" placeholder="Déjanos tu comentario*" required></textarea>
                <input class="btn btn-header" type="submit" value="ENVIAR MENSAJE">
            </form>`;

  const $stylos = document.createElement("style");
  $stylos.innerHTML = ` 

 .contact{
margin-top: 180px;
 }
 .section-title-card {
  margin: 0 20rem
   color: #6a6a6a;
  }
        .contact-form {
        margin: 2rem auto;
        padding: 1rem;
        max-width: 800px;
      }
          .contact-form > * {
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
}
         .contact h2 {

            text-align: center;
    margin: 0 auto;
    font-size: 2.5rem;
    color: #6a6a6a;
    margin-top: 8rem;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
         }

         .contact-form input,
        .contact-form textarea {
          font-size: 0.85rem;
        /*   font-family: var(--font); */
        }
    

        .contact-form input {
          border: 0;
          padding-left: 0;
     /*      border-bottom: thin solid var(--gray-dark-color); */
        }

.contact-form textarea {
/*   border: thin solid var(--gray-dark-color); */
  resize: none;
}

.contact-form input[type="submit"] {
  margin-top: 0;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

.contact-form input[type="submit"]:hover {
  opacity: 0.75;
}

.contact-form *::placeholder {
 /*  color: var(--gray-dark-color); */
}

.contact-form-response {
  padding: 1rem;
  width: 400px;
  text-align: center;
  background-color: white;
}
.contact-form-response svg {
  margin-top: 2rem;
  width: 4rem;
  height: 4rem;
  fill: black;
}

.modal#gracias:target {
  opacity: 1;
  pointer-events: auto;
}


         .sub-title-contact {
           padding-top: 1rem;
           color: color("wth");
           text-align: center;
           letter-spacing: 2px;
         }
    
         .section-title-card {
           @extend .title; */
           border: none;
           margin: 0 auto;
           padding-top: 1rem;
           color: black
         }
    
         .contact-form input[type="submit"] {
           margin-top: 0;
           cursor: pointer;
           transition: all 0.5s ease-out;
         }
    
         .contact-form input[type="submit"]:hover {
           opacity: 0.75;
         }
    
         .contact-form .btn-header {
           background-color: color("second");
         }
    
         .contact-form *::placeholder {
           /*      color: color("grey-dark"); */
         }
    
         
        @media screen and (min-width: 1024px) {

  .contact-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
  }

  .contact-form textarea,
  .contact-form-loader {
    grid-column: span 2;
  }

  .contact-form input[type="submit"] {
    margin-left: 0;
  }
}
.contact-card {
  margin: 1rem auto;
  padding: 1rem;
  width: 100%;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}

.contact-card > svg {
  width: 2rem;
  height: 2rem;
  fill: black
}

.contact-card > small {
  margin-top: -1rem;
}
.contact-card {
  margin: 1rem auto;
  padding: 1rem;
  width: 100%;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.contact-card > svg {
  width: 2rem;
  height: 2rem;
  fill: black
}

.contact-card > small {
  margin-top: -1rem;
}

  .contact-cards > *{
    color: #6a6a6a;
  }
@media screen and (min-width: 768px) {
  .contact-cards {
    display: grid;
    grid-template-columns: repeat(2, 48%);
    justify-content: space-between;
  }
}

@media screen and (min-width: 1024px) {

  .contact-cards {
    grid-template-columns: repeat(3, 24%);

  }
    .contact-cards {
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 15px;
      padding: 0 1rem;
  }
}
  `;

  document.head.appendChild($stylos);

  return $contacto;
}
