import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <h1 className="section-title">Produtos</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  )
}