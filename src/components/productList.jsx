import ProductCard from './ProductCard'
import './ProductList.css'

const products = [
  {
    id: 1,
    name: 'Celular',
    description: 'celular gerado por ia',
    image: '/imagens/cell.png',
  },
  {
    id: 2,
    name: 'Notebook',
    description: 'notebook gerado por ia',
    image: '/imagens/notebook.png',
  },
  {
    id: 3,
    name: 'Arduino',
    description: 'arduino gerado por ia',
    image: '/imagens/arduino.png',
  },
]

export default function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  )
}