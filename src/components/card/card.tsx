import "./card.css";

interface CardProps {
    price: number | string;
    image: string;
    title: string;
}

export function Card({ price, image, title }: CardProps) {
    return (
        <div className="card">
            <img src={image} alt={`Imagem do produto ${title}`} /> {/* Adicionando o atributo alt */}
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}
