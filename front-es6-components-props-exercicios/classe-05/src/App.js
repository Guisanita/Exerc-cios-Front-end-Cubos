import './App.css';
import Card from './components/Card';
import imgCardCookie from './assets/cookie.svg'
import imgCardAlert from './assets/alert.svg'

const cardsInfo = [
  {
    id: 1,
    imgCard: imgCardCookie,
    textCard: 'Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.',
    textBtn: 'Tudo bem!',
    colorBtn: '#ED6755'
  },
  {
    id: 2,
    imgCard: imgCardAlert,
    textCard: 'Você será deslogado imediatamente!',
    textBtn: 'Extender login',
    colorBtn: '#1C1B5E'
  }
]


function App() {
  return (
    <div className="container">
      {
        cardsInfo.map((card) =>
        (<Card key={card.id}
          imgCard={card.imgCard}
          textCard={card.textCard}
          textBtn={card.textBtn}
          colorBtn={card.colorBtn}>

        </Card>)
        )
      }
    </div>
  );
}

export default App;
