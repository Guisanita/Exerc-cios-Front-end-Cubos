import './App.css';
import imgBg from './assets/drawers.jpg';
import profile from './assets/avatar-michelle.jpg';

function App() {
  return (
    <body>
      <div class="content-wrapper">
        <article class="card">
          <div class="card__img">
            <img src={imgBg} alt="furniture" />
          </div>
          <div class="card__text-wrapper">
            <h1 class="card__heading">Mude a aparência geral adicionando esses toques maravilhosos aos móveis de sua casa
            </h1>
            <p class="card__paragraph">Já esteve em uma sala e sentiu como se algo estivesse faltando? Talvez um pouco vazia
              e convidativa. Tenho algumas dicas simples para tornar qualquer ambiente completo.</p>
            <div class="card__footer-wrapper">
              <img src={profile} alt="author" class="author__img" />
              <div class="author__info">
                <div class="author__name">Michele Campos</div>
                <div class="author__date">28 Jun 2020</div>
              </div>
              <button class="card__btn">
                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'>
                  <title>Seta</title>
                  <path d='M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z' fill='none' />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </body>

  )
}

export default App;
