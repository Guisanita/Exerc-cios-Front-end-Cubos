import './styles.css';
import closeBtn from '../../assets/close.svg';

export default function Card({
    imgCard,
    textCard,
    textBtn,
    colorBtn
}) {
    return (
        <div className='card-container'>
            <img
                className='closeBtn'
                src={closeBtn}
                alt='close'
            />
            <img
                className='imgCard'
                src={imgCard}
                alt='Card'
            />
            <p> {textCard} </p>

            <button style={{ backgroundColor: colorBtn }} >
                {textBtn}
            </button>
        </div >
    )
}