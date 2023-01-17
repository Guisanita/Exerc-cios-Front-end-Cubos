import './styles.css';

export default function profile({ profile }) {
    return (<div className="div-profile"
        style={{
            backgroundImage: `url(${profile})`
        }}>

    </div>)
}