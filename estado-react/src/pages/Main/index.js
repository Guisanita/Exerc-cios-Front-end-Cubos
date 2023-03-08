import './style.css';
import Logo from '../../assets/8726239_puzzle_piece_icon 1.png'
import LogoCubos from '../../assets/CUBOS PUZZLE.png'

function Main() {

  return (
    <div className='container'>
      <div className='sideBar'>

        <div className='logo'>
          <img src={Logo}></img>
          <img src={LogoCubos}></img>
        </div>

        <div>
          <button>RESET</button>
        </div>

      </div>

      <div className='divCards'></div>
    </div>
  );
}

export default Main;
