import './styles.css';

export default function Card({
    children,
    name,
    socialMedia,
    followers,
    following
}) {

    return (
        <div className='div-card'>

            <div>{children}</div>
            <div>
                <strong className='name'>{name}</strong>
                <p>@{socialMedia}</p>
            </div>
            <div>
                <p> {followers} seguidores </p>
                <p>{following} seguindo</p>
            </div>

        </div>
    )
}