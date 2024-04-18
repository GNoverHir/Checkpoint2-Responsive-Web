import "./style.css"

type CardProps = {
    nome: string;
    img: string;
    email: string;
    rm: number
}

const Card = ({nome, img, email, rm}: CardProps) => {
    return(
        <section className="CardGeral">
            <img width={120} height={100} src={img}/>
            <div className="InfoCard">
                <h2>{nome}</h2>
                <h3>{email}</h3>
                <h3>{rm}</h3>
            </div>
        </section>
    )
}

export default Card
