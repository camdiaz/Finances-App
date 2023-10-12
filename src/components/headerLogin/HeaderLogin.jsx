import React from "react";
import "./style/headerLogin.css"
function HeaderLogin() {
  return (
    <div class="content">
      <div class="content__container">
        <p class="content__container__text">Hola!</p>

        <ul class="content__container__list">
          <li class="content__container__list__item">Bienvenid@</li>
          <li class="content__container__list__item">Buenos días</li>
          <li class="content__container__list__item">Buenas Tardes</li>
          <li class="content__container__list__item">Buenas Noches</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderLogin;
