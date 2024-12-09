import "./card.css"

interface CardProps {
    price: number,
    title: string,
    image: string

}

export function Card({ price, image, title }: CardProps) {
    return (
        <div className="card">
            <h2></h2>
            <p><b>Valor:</b></p>
        </div>
    )
}