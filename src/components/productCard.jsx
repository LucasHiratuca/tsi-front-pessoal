import './ProductCard.css'

export default function ProductCard({ name, description, image }) {
  return (
    <article className="card">
      <img src={image} alt={name} />
      <h2 className="card-title">{name}</h2>
      <h3 className="card-subtitle">{description}</h3>
    </article>
  )
}